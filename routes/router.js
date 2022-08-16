const express = require('express');
const router = require('express').Router();
const app=express();
const path=require('path');
app.use(express.static(path.join(__dirname, 'views')));

//use middleware on request
function validateUser(req,res,next) {
    app.locals.validate=true;
    console.log('validation Ran!');
    next();
}

router.get('/',(req,res,next)=>{
    res.render('home');
});

router.get('/login',(req,res,next)=>{
    res.render('login');
});

router.post('/login',(req,res,next)=>{
    const body=req.body;
    const email=body.email;
    const pswd=body.pswd;
    if(pswd !== ''){
        console.log(pswd);
    }

    //all about req data and res data
    //read express req and res documentation
    res.json(body);
});

router.get('/register',(req,res,next)=>{
    res.render('register');
});

module.exports=router;