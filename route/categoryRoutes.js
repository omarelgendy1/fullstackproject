const express = require('express');
const passport = require('passport');
const router = express.Router();
const jwt =require('jsonwebtoken');
const Category=require("../models/Category");
const MainCategory = require("../models/MainCategory");
const SubCategory = require("../models/SubCategory");
const config=require('../config/database');

router.get('/categorieslist',(req,res,next)=>{
      Category.getCategories((err,categories)=>{
          if(err){
             res.json({success:false,msg:'Failed to get categories'});
          }else{
              res.json(categories);
          }
      });
 });

 router.post('/addcategory',(req,res,next)=>{
     let newCategory= new Category({
         mainCategory :req.body.mainCategory,
         subCategory :req.body.subCategory

     });
     
     Category.addCategory(newCategory,(err,category)=>{
           if(err){
                 res.json({success:false,msg:'Failed to get categories'});
           }else{
            res.json({success:true,msg:'Category added'});
           }
     })
 });


router.delete('/deletecategories',(req,res,next)=>{
      Category.deleteCategory(req.body.mainCategory,(err,callback)=>{
              if(err){
                      res.json({success:false,msg:'Failed to delete categories'});
              }else{
                      res.json({success:true,msg:'Category deleted'});
              }
      })
});

router.post('/addmaincategory',(req,res,next)=>{
    let newMainCategory= new MainCategory({
        mainCategory :req.body.mainCategory,
        

    });
    
    MainCategory.addCategory(newMainCategory,(err,category)=>{
          if(err){
                res.json({success:false,msg:'Failed to get categories'});
          }else{
           res.json({success:true,msg:'Category added'});
          }
    })
});
router.get('/maincategorylist',(req,res,next)=>{
    MainCategory.getMainCategories((err,categories)=>{
        if(err){
           res.json({success:false,msg:'Failed to get categories'});
        }else{
            res.json(categories);
        }
    });
});


module.exports = router;



