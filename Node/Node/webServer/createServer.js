const http = require('http');

http.createServer((req,res)=>{
    res.writeHead(200, {'content-type':'text/html; charset=utf8'})
    res.write('<h1>Hello World</h1>')
    res.end('<p>Node Server</p>')
}).listen(8080, ()=>{
    console.log('8080포트에서 서버 대기중')
})

http.createServer((req,res)=>{
    res.writeHead(200, {'content-type':'text/html; charset=utf8'})
    res.write('<h1>Hello World</h1>')
    res.end('<p>Welcome 8081</p>')
}).listen(8081, ()=>{
    console.log('8081포트에서 서버 대기중')
})