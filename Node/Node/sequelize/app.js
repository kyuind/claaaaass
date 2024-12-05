const express = require("express");
const path = require("path");
// 라우터 불러오기
const indexRouter = require('./routers')
const userRouter = require('./routers/users')
const commentsRouter = require("./routers/comments")

const { sequelize } = require("./models")

const app = express(); // 서버 생성

app.set('port', process.env.PORT || 3000); //port 설정

//데이터베이스 연결 
sequelize.sync({force: false})
    .then(()=>{
        console.log("데이터베이스 연결 성공") //연결 확인
    })
    .catch((err)=>{
        console.log(err) //연결 확인
    })

//미들 웨어 설정 

app.use(express.static(path.join(__dirname, 'pubilc')));//static
app.use(express.json()) //body parser
app.use(express.urlencoded({extended: false})) //body parser

//router 설정

app.use('/',indexRouter)
app.use('/user', userRouter)
app.use('/comment',commentsRouter)

//애러 처리 미들웨어 

app.use((req,res,next)=>{
    res.status(404).send(`${req.method} ${req.url} 라우터 없음`);
})

app.use((err,req,res,next)=>{
    const status = err.status || 500;
    console.error(err);
    res.status(status).json({error : err.message})
})

app.listen(app.get('port'),()=>{
    console.log(`${app.get("port")}번 포트에서 서버 실행 중 `)
})