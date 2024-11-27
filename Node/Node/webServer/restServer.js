const http = require('http'); // 서버생성
const fs = require('fs').promises; // 파일 불러오기
const path = require('path');  // 경로 만들기

const users = {} // 데이터 저장

http.createServer(async (req,res) => {
    try{
            if(req.method === 'GET'){
                if (req.url === '/') {
                    const data = await fs.readFile(path.join(__dirname, 'restFront.html'));
                    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
                    return res.end(data);
                } else if (req.url === '/about') {
                    const data = await fs.readFile(path.join(__dirname, 'about.html'));
                    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
                    return res.end(data);
                } else if (req.url === '/users'){
                    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
                    return res.end(JSON.stringify(users));
                }
                try{
                    const data = await fs.readFile(path.join(__dirname, req.url));
                    return res.end(data)
                } catch (err) {
                    console.error(err)
                }
            }
            else if (req.method === 'POST'){
                if (req.url === '/user'){
                    let body = ''; 
                    req.on('data', (data)=>{
                        body += data;
                    })
                    return req.on('end',()=>{
                        console.log('POST 본분(Body)', body);
                        const { name} = JSON.parse(body);
                        const id = Date.now(); // req 시간 (유사 고유값) 싱글 thread 사용떄문 
                        users[id] = name
                        res.writeHead(201, {'content-type' : 'text/plain; chaset=utf-8'});
                        res.end('등록 성공')
                    })
                }
            }
            else if (req.method === 'PUT'){
                if (req.url.startsWith('/user/')){
                    const key = req.url.split('/')[2];
                    let body = '';
                    req.on('data', (data) =>{
                        body += data;
                    })
                    return req.on ( 'end', ()=>{
                        console.log('PUT 본문 (body):', body)
                        users[key] = JSON.parse(body).name; // 37번줄과 같은 내용
                        res.writeHead(200, {'content-type' : 'text/plain; chaset=utf-8'});
                        return res.end(JSON.stringify(users));
                    })
                }
            }
            else if (req.method === 'DELETE'){
                if (req.url.startsWith('/user/')){
                    const key= req.url.split('/')[2];
                    delete users[key];
                    res.writeHead(200, {'content-type' : 'text/plain; chaset=utf-8'});
                    return res.end(JSON.stringify(users));
                }

            }
            res.writeHead(404);
        return res.end('Not Found')
    }
    
    catch (err) {
        console.error(err);
        res.wruteHead(500, {'content-Type': 'text/plain; chaset= utf-8'});
        res.end(err.message);
    }
}).listen (8080, ()=>{
    console.log('8080 포트 서버 실행 중')
})


