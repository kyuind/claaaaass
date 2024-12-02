// dot env
require('dotenv').config(); // dotenv 초기화 


//모듈 불러오기 import
const express = require("express");
const path = require("path");
const morgan = require("morgan");
const cookieparser = require("cookie-parser")
const session = require('express-session');
const { error } = require('console');
const multer = require('multer');

//라우터 불러오기
const indexRouter = require('./routers');
const userRouter = require('./routers/user')

const app = express(); // 서버생성

const cookieScret = process.env.COOKIE_SCRET

// PORT 설정 
app.set('port',process.env.PORT || 3002); 


app.use(morgan('dev')) 
app.use(cookieparser(cookieScret))
app.use(session({
    secret: process.env.SESSION_SCRET, 
    resave: false,
    saveUninitialized: true,
    cookie:{maxAge:60000, httpOnly:true,}
}))


app.use(express.static(path.join(__dirname, 'public')))

app.use(express.json())
app.use(express.urlencoded({extended: true}))

// *************** 라우터 ***************
// 라우터로 가는 코드
// 1. 기본 url 
app.use('/',indexRouter)

// 2. /user/ 다음에 나오는 url
app.use('/user', userRouter)

// error 처리 미들웨어
app.use((req, res, next)=>{
    res.status(404).send('Not Found')
})

app.use((err, req, res,next)=>{
    console.error(err);
    res.status(500).send(err.message)
})

//서버 실행
app.listen(app.get('port'),()=>{
    console.log(`${app.get('port')}번 포트 서버 대기중`)
}); // 이벤트리스너 같은 너낌, 요청대기 요청받는 곳 , 서버를 유지시켜줌 (계속 돌려버리기)
