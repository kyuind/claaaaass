const express = require('express')
const router = express.Router();
const {isLoggedIn, isNotLoggedIn} = require('../middle');
const {renderJoin, renderMain, renderProfile} = require('../controller/page')

router.get('/porfile',isLoggedIn, renderProfile);

router.get('/join',isNotLoggedIn, renderJoin);

router.get('/',renderMain);

router.get('/',(req,res,next)=>{
    res.end('연결')
})

module.exports = router