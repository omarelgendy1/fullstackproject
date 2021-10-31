const express = require('express');
const passport = require('passport');
const router = express.Router();
const jwt =require('jsonwebtoken');
const Admins = require("../models/Admin");
const Users = require("../models/Users");
const Products = require("../models/Product");
const Categories = require("../models/Category");
const config=require('../config/database');




router.post('/registeradmin',(req,res,next)=>{
    let newAdmin= new Admins({
        name :req.body.name,
        email : req.body.email,
        username : req.body.username,
        password : req.body.password,
        position :req.body.position
    });
  
    Admins.addAdmin(newAdmin, (err,admin)=>{
      if(err){
              res.json({success:false,msg:'Failed to register Admin'});
      }else{
          res.json({success:true,msg:'Admin registerd'});
      }
    });
  
  });

  router.post('/authenticateAdmin',(req,res,next)=>{
    const username =req.body.username;
    const password=req.body.password;
  Admins.getAdminByUsername(username,(err,admin)=>{
    if(err) throw err;
    if(!admin){
     return res.json({success:false,msg:'Admin not found'});
    }
    if(admin.password!=password){
    return res.json({success:false,msg:'wrong password'});
    }else{
        const token =jwt.sign({admin},config.secret,{
            expiresIn:60400
        });
        res.json({
            success:true,
            token:'JWT '+token,
            admin:{
                id: admin._id,
                name: admin.name,
                username: admin.username,
                email : admin.email,
                position:admin.position
            }
        })
    }
})
});

router.get('/profile',passport.authenticate('jwt',{session:false}),(req,res,next)=>{

    res.json(req.admin);
   });


   router.get('/admins',(req,res,next)=>{
    Admins.getAdmins((err,admins)=>{
        if(err){
            res.json({success:false,msg:'Failed to get Admins'});
            
        }
        else{
            res.json(admins);
        }
    });
 });

 router.delete('/deleteuser',(req,res,next)=>{
    Users.deleteUserById(req.body,(err,callback)=>{
            if(err){
                    res.json({success:false,msg:'Failed to delete user'});
            }else{
                    res.json({success:true,msg:'User deleted'});
            }
    })
});
router.delete('/deleteproduct',(req,res,next)=>{
    Products.deleteProductById(req.body,(err,callback)=>{
            if(err){
                    res.json({success:false,msg:'Failed to delete product'});
            }else{
                    res.json({success:true,msg:'product deleted'});
            }
    })
});
router.delete('/deletecategory',(req,res,next)=>{
    Categories.deleteCategory(req.body,(err,callback)=>{
            if(err){
                    res.json({success:false,msg:'Failed to delete category'});
            }else{
                    res.json({success:true,msg:'category deleted'});
            }
    })
});
 
 
 module.exports = router;