const express = require("express")
const router = express.Router()

const User = require('../models/users')

router.get('/', async(req,res,next)=>{
    try{
        const users= await User.findAll()
        res.send({users})
    }catch (err){
        console.error(err);
        next(err)
    }

})







module.exports = router ;