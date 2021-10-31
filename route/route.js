const express = require('express');
const passport = require('passport');
const router = express.Router();
const jwt =require('jsonwebtoken');
const Users = require("../models/Users");
const config=require('../config/database');

router.post('/register',(req,res,next)=>{
  let newUser= new Users({
      name :req.body.name,
      email : req.body.email,
      username : req.body.username,
      password : req.body.password
  });

  Users.addUser(newUser, (err,user)=>{
    if(err){
            res.json({success:false,msg:'Failed to register User'});
    }else{
        res.json({success:true,msg:'User registerd'});
    }
  });

});



router.post('/authenticate',(req,res,next)=>{
   const username =req.body.username;
   const password=req.body.password;

   Users.getUserByUsername(username,(err,user)=>{
       if(err) throw err;
       if(!user){
        return res.json({success:false,msg:'User not found'});
       }
       if(user.password!=password){
       return res.json({success:false,msg:'wrong password'});
       }else{
           const token =jwt.sign({user},config.secret,{
               expiresIn:60400
           });
           res.json({
               success:true,
               token:'JWT '+token,
               user:{
                   id: user._id,
                   name: user.name,
                   username: user.username,
                   email : user.email,
                   cart:user.cart
               }
           })
       }
   })
});



router.get('/profile',passport.authenticate('jwt',{session:false}),(req,res,next)=>{

 res.json(req.user);
});



router.get('/Users',(req,res,next)=>{
   Users.getUsers((err,users)=>{
       if(err){
           res.json({success:false,msg:'Failed to get Users'});
           
       }
       else{
           res.json(users);
       }
   });
});


module.exports = router;