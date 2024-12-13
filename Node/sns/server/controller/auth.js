const User = require('../schemas/users');
const crypto = require('crypto');
const dotenv = require('dotenv');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

dotenv.config();

// 회원가입
exports.join = async (req,res,next)=>{
    const {snsid, password, email, phone, nick} = req.body
    try{
        //중복검사
        const duplicateUser = await User.findOne({$or:[{snsid},{email},{phone}]})
        if (duplicateUser) {
            return res.redirect('/join?error=exist')
        }
        // 비밀번호 암호화(pbkdf2 암호화 방식)
        const salt = process.env.SALT
        const hash = crypto.pbkdf2Sync(password, salt, 15000, 64, 'sha512').toString('hex')
        
        // 사용자 데이터 저장(DB-Create)
        await User.create({
            snsId:snsid,
            password: hash,
            phon: phone,
            nick,
            email
        });
        return res.redirect('/')
    }catch(err){
        console.error(err)
        return next(err)
    }


}

//Lccal Strategy
passport.use(new LocalStrategy({
    usernameField : 'snsid', // 사용자 id
    passwordField : 'password', // 사용한자가 입력한 pw
    passReqToCallback : false, // 콜백함수에 req객체 전달 안함
}, async (snsid, password, done) => {
    try{
        const user = await User.findOne({snsId:snsid}); //가입회원 찿기
        if (!user){
            console.log("id 없음")
            return done ( null, false, {meessge: '가입되지 않은 입력입니다.'})
            // done(error(Error|null), user(Object|false) , info (Object|undifined))
        }
        //비밀번호 검증
        const salt = process.env.SALT
        const hash = crypto.pbkdf2Sync(password, salt, 15000, 64, 'sha512').toString('hex')
        if ( user.password !== hash){
            console.log("비밀번호 틀림")
            return done (null, false, {message:'비밀번호가 일치하지 않습니다.'})
        } 
        return done (null, user)
    } catch (err){
        console.error(err)
        return done (err)
    }
}))


// 로그인
exports.login = (req,res,next)=>{
    passport.authenticate('local',(authError,user,info)=>{ // passport 에서 제공하는 local 전략을 사용하겟다. 
        console.log(user)
        if(authError){
            console.error(authError)
            return next(authError)
        }
        if(!user) {
            return res.redirect(`/?error=${info.message}`)
        }
        return req.login(user, (loginError)=>{ // 유저정보가 들어오면 세션에 저장
            if(loginError){ // 로그인 오류시 오류메세지 출력
                console.error(loginError);
                return next(loginError);
            }
            return res.redirect('/') // 로그인에 성공하면 메인페이지로 리다이렉트
        })
    })(req,res,next);
}

//로그아웃
exports.logout = (req,res,next)=>{
    req.logout((err)=>{
        if(err){
            console.error(err)
            return res.redirect('/?error=logout_failed')
        }
        res.redirect('/')
    })
}




