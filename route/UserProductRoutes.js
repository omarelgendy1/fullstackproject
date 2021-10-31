const express = require('express');
const passport = require('passport');
const router = express.Router();
const jwt =require('jsonwebtoken');
const Product = require("../models/Product");
const MainCategory=require("../models/MainCategory");
const SubCategory=require("../models/SubCategory");
const Category=require("../models/Category");
const config=require('../config/database');

//do not require sign in
//browes product by name
router.get('/getproduct_name',(req,res,next)=>{
    Product.getProductByName(req.body.name,(err,product)=>{
            if(err){
                res.json({success:false,msg:"error retriving product"});
            }
            else{
                    res.json(product);
            }
    })
});

//browse all products
router.get('/productlist',(req,res,next)=>{
    Product.getProducts((err,products)=>{
            if(err){
                    res.json({success:false,msg:'Failed to get products'});
            }else{
                    res.json(products);
            }
    });
});

//user can browse all categories
router.get('/categorieslist',(req,res,next)=>{
     Category.getCategories((err,categories)=>{
         if(err){
            res.json({success:false,msg:'Failed to get categories'});
         }else{
             res.json(categories);
         }
     });
});
//user can browse all main categories
router.get('/maincategorieslist',(req,res,next)=>{
    MainCategory.getMainCategories((err,maincategories)=>{
        if(err){
           res.json({success:false,msg:'Failed to get categories'});
        }else{
            res.json(maincategories);
        }
    });
});

//user can browse all sub categories
router.get('/subcategorieslist',(req,res,next)=>{
   SubCategory.getSubCategories((err,subcategories)=>{
        if(err){
           res.json({success:false,msg:'Failed to get categories'});
        }else{
            res.json(subcategories);
        }
    });
});

//require sign

//add to cart and add/remove product to order









module.exports = router;