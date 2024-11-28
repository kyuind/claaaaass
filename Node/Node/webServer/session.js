const http = require('http');
const fs = require('fs');
const path = require('path');

const parseCookies = (cookie='') =>{ 
    return cookie
    .split(';') 
    .map(v => v.split('=')) 
    .reduce((acc, [k,v])=>{
        acc[k.trim()] = decodeURIComponent(v);
        return acc
    }, {}); 
}  

const session = {};

http.createServer(async (req, res) => {
    const cookies = parseCookies(req.headers.cookie);
    if (req.url.startsWith('/login')){ 
        const url= new URL(req.url, 'http://localhost:8084'); 
        const name = url.searchParams.get('name'); 
        const expires= new Date(); 

        expires.setMinutes(expires.getMinutes()+3); 

        const uniqueInt = Date.now() // unique 이어야함. 고유 값을 지정해줘야하기 떄문
        session[uniqueInt] = {
            name, // name: name (변수명이 같으면 생략 가능)
            expires,
        } 

        res.writeHead(302,{
            Location: '/',
            'set-Cookie' : `session=${uniqueInt}; Expires=${expires.toGMTString()}; HttpOnly; path =/`,
        });
        res.end();
        
    } else if (cookies.seesion && session[cookies.session].expires > new Date()) {
        res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end(`${seesion[cookies.session].name}님 안녕하세요`);
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
