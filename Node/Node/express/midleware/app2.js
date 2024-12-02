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

// const app = express(); // 서버생성

const cookieScret = process.env.COOKIE_SCRET




// PORT 설정 
// app.set('port',process.env.PORT || 3001); // || = (or 문) 

//  multer의 저장위치 설정
// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, 'uploads/')
//     },
//     filename: (req, file, cb) => {
//         const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9)
//         cb(null, path.basename(file.originalname,path.extname(file.originalname))+'-'+uniqueSuffix+path.extname(file.originalname))
//     }
// });

const upload = multer({
    storage: storage,
    limits: {fileSize: 1024 * 1024 * 5 }
})


// app.post('/upload', upload.single('file'), (req, res) =>{
//     console.log(req.file);
//     res.send(`File Upload Complate: ${req.file.filename}`)
// }) // 미들웨어 (싱글파일)


//(공통)미들웨어

// app.use((req,res,next)=>{
//     console.log("내가 만듬 ! ")
//     const error = new Error("에러 발생");
//     error.status = 503
//     next(error)
// })

app.use(morgan('dev')) //요청에 대한 기록
app.use(cookieparser(cookieScret))
app.use(session({
    secret: process.env.SESSION_SCRET, //"SecretSession",
    resave: false,
    saveUninitialized: true,
    cookie:{maxAge:60000, httpOnly:true,}
}))
app.use(express.static(path.join(__dirname, 'public', 'imgs'))) //파일 이름으로 접근가능하게 설정. 파일경로가 url상으로 표시되지 않음 

app.use((err, req, res, next) =>{ // 에러 처리 미들웨어
    res.status(err.staus || 500).send(err.message);
})



app.use(express.static(path.join(__dirname, 'public')))

//body-parser(json) 미들웨어 
app.use(express.json()) // 들어오는 제이슨 우선 파싱
//app.use(express.urlencoded())
app.use(express.urlencoded({extended: true}))







//라우터(개별 미들웨어), response 종료 (공통미들웨어는 라우터보다 먼저 작성해야하는 이유)

app.post('/upload', upload.array('files', 5 ), (req,res)=>{ //upload.array  : 미들 웨어. // req 후 res 전에 동작하면 그냥 미들웨어 
    console.log(req.files);
    res.send('Multiple File Uploaded')
})


app.post('/form', (req,res) =>{
    console.log(req,body)
    res.send(`데이터 처리 완료 :${JSON.stringify(req,body)}`)
})

app.post('/send-json', (req, res)=>{
    const {name,age, gender} = req.body
    console.log(req)
    console.log(`Parsing Data : ${name}, ${age}, ${gender}`)
    res.json({message:`Parsing Data : ${name}, ${age}, ${gender}`});
})

app.get ('/session', (req, res, next)=>{
    if (req.query.skip){ // session?skip=true
        return next("route")
    } else{
        req.session.user = {name:'kyu', role:'admin'} 
        res.send("세션정보 저장 완료")
    }
});

app.get ('/session', (req, res, next)=>{
    res.send("다른 라우터 동작")
});

app.get('/session/read', (req, res)=>{
    if (req.session.user){
        res.send(`세션 정보 :${req.session.user}`) 
    }else{
        res.send("세션 정보가 없습니다.")
    }
});

app.get('/session/clear', (req, res)=>{
    //req.session.destroy()// 세션 정보 삭제 메소드 (쿠키는 유지)
    res.clearCookie('connect.sid') // 쿠키를 삭제
    res.send("세션을 삭제하였습니다.")
});

app.get('/', (req, res)=>{
    res.cookie('name','kyu',{ signed: true, maxAge : 60000, httpOnly: true, path : '/'}) // res.cookie(key, value, {속성값 object로 작성})
    res.send('쿠키 생성 완료')
}); 

app.get('/cookie/read/', (req, res) =>{
    const userCookie = req.signedCookies.name;
    if (userCookie){
        console.log(req.signedCookies)
        res.send(`쿠키는 ${userCookie}`)
        console.log(req.signedCookies)
    }else{
        res.send('쿠키 정보가 없습니다.')
    }
});

// app.get('/', (req, res)=>{
//     // res.writeHead(200, {'Content-Type': 'text/html;chaset=utf-8'})
//     // res.end('Helo world') // end뒤에 res불가. 
//     res.send('Hello World')
// }) // res.end 기능까지 포함.

app.get('/category/book', (req, res)=>{
    res.send("user Book")
});

app.get('/category/note', (req, res)=>{
    res.send("user Note")
});

app.get('/category/*', (req, res)=>{
    res.send("카테고리 모든 요청 처리")
});

app.get('/category', (req, res)=>{
    res.send("user Info")
});

app.get('/', (req, res)=>{
    res.send('Good bye World')
});

app.get('*', (req, res)=>{
    res.send("404 에러 발생")
});



//서버 실행
app.listen(app.get('port'),()=>{
    console.log(`${app.get('port')}번 포트 서버 대기중`)
}); // 이벤트리스너 같은 너낌, 요청대기 요청받는 곳 , 서버를 유지시켜줌 (계속 돌려버리기)
