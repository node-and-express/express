const express = require('express');
const router = require('express').Router();

router.get('/',(req,res,next)=>{
    res.json('user');
});


module.exports=router;