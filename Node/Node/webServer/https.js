const https = require('https');
const fs = require('fs');

https.createServer({
    cert: fs.readFileSync('도메인 인증서 경로'),
    key : fs.readFileSync('도메인 비밀키 경로'),
    ca : [
        fs.readFileSync('상위 인증서 경로'),
    ] //비동기적 사용 x 효울성 ↓ I/O 처리가 적기때문에 직관적인 동기적처리가 효율 ↑
}, (req, res)=>{

})