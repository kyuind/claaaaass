// const http = require('http')

// http.createServer((req,res) =>{
//     console.log(req.url, req.headers.cookie);
//     res.writeHead(200, {'set-cookie': 'myCookie=test'});
//     res.end("<h1>Cookie</h1>")
// }).listen(8080, ()=> {
//     console.log('8080 포트 서버 대기중')
// })

const http = require('http');
const fs = require('fs');
const path = require('path');

const parseCookies = (cookie='') =>{ // {name = sd;id=s}
    return cookie
    .split(';') // ['name=sd','id=s']
    .map(v => v.split('=')) // [[name,sd],[id,s]]
    .reduce((acc, [k,v])=>{
        acc[k.trim()] = decodeURIComponent(v);
        return acc // {mane: 'sd',id : 's' }
    }, {}); //iterable
}  

// {cookie.split().map.().reduce()}

http.createServer(async (req, res) => {
    const cookies = parseCookies(req.headers.cookie); //서버가 만들어지며 req 할때 header에 있는 cookie를 파싱 (20줄 처럼)
    if (req.url.startsWith('/login')){ // req.url에 /login?name=''가 포함 
        const url= new URL(req.url, 'http://localhost:8084'); // req.url을 실행할때 http://localhost:8084를 포함하여 기본 url로 설정함
        console.log(url)
        const name = url.searchParams.get('name'); // ex) url에서 name부분만 파싱해서 가져옴
        const expires= new Date() //유효기간 (쿠키에 대한 유효기간)

        expires.setMinutes(expires.getMinutes()+3); //유효기간 3분 카운터 
        res.writeHead(302,{
            Location: '/',
            'set-Cookie' : `name = ${encodeURIComponent(name)}; Expires=${expires.toGMTString()}; HttpOnly; path =/`, // encodeURIComponent : 한글로 들어가면 안되기에 아스키코드로 변환 저장 , HttpOnly : 접근 변환 불가
        });
        res.end();
    } else if (cookies.name) {
        res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end(`${cookies.name}님 안녕하세요`);
    } else {
        try{
            const data = await fs.promises.readFile(path.join(__dirname,'cookie.html'));
            res.writeHead(200, {'content-type': 'text/html; charset=utf-8'});
            res.end(data);
        } catch (err){
            res.writeHead(500,{'content-type': 'text/plain; charset=utf-8'});
            res.end(err.message);
        }
    }
}).listen(8084, ()=>{
    console.log('8084번 포트에서 서버 대기 중입니다!');
});
