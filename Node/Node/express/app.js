const express = require('express');
const morgan = require('morgan');
const path = require('path');
const fs = require('fs');



const app = express(); // 서버 생성

const PORT = process.env.PORT || 3000; //env 중요한 변수 값들 저장해놓는곳? 
//app.set('PORT',process.env.PORT || 3000); // 6-7줄 포트 설정

// morgan 미들웨어 
const logStream = fs.createWriteStream(path.join(__dirname,'access.log'),{flags : 'a'}) 

app.use(morgan('combined',{stream : logStream}))

//router 설정
app.get('/', (req, res)=> {
    res.send('Hello My Express');
});
app.get('/html', (req, res) => {
    res.sendFile(path.join(__dirname,('./index.html')))
})


app.listen(PORT, ()=>{
    console.log(`${PORT}번 포트에서 서버 대기중`)
})
