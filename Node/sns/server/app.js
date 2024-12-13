const dotenv = require('dotenv');
const express = require('express');
const path = require('path');
const morgan = require('morgan');
const cookieParser = require('cookie-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const session = require('express-session')
const passport = require('passport') // << session 이 있어야 사용가능
const LocalStrategy = require('passport-local');


dotenv.config()

const pageRouter = require('./routes/pageRouter')
const authRouter = require('./routes/authRouter');
const postRouter = require('./routes/postRouter');

//Shcema import
const User = require('./schemas/users');

// 서버 연결
const app = express();
app.set('port',process.env.PORT || 3000);

//몽고디비 연결
mongoose.connect(process.env.DB_URI)
.then(()=>{
    console.log('DB 연결성공')
})
.catch((err)=>{
    console.log(err)
})

// 미들웨어
app.use(cors());
app.use(morgan('dev'))
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(session({
    resave:false, //변경사항이 없어도 무조건 저장할지 설정
    saveUninitialized: false, // 세션이 초기화되지 않을 상태일때 저장여부, 빈data일때 세션을 저장할지 여부
    secret: process.env.COOKIE_SECRET, // 특정형태로 변환 시킴
    cookie:{
        httpOnly:true,
        secuire:false, // https에서 사용여부 false https>>X
        maxAge: 1000*60*5
    }
}))

// passport 미들웨어
app.use(passport.initialize()) // passport 미들웨어 사용
app.use(passport.session()) // session 기반의 인증(전략)을 사용

// passport-serialize 세션에 사용자 id 저장 ,, 식별목적
passport.serializeUser((user, done)=>{
    console.log('serializeUser:',user)
    done(null,user._id)
})
// passport-deserialize 세션에 사용자 정보 복원 ,, 비교목적
passport.deserializeUser(async (id, done)=>{
    try{
        const user = await User.findById(id);
        done(null,user)
    } catch(err){
        console.error(err);
        done(err)
    }
})
// router
app.use('/',pageRouter);
app.use('/auth',authRouter);
app.use('/post', postRouter);

//error 미들웨어
app.use((req,res,next)=>{
    const error = new Error(`${req.method} ${req.url} 라우터 없음`)
    error.status = 404;
    next(error)
})

app.use((err,req,res,next)=>{
    console.error(err)
    res.status(err.status || 500).json({error:err.message})
})


app.listen(app.get('port'),()=>{
    console.log(`${app.get('port')} 한조 대기중`)
})
