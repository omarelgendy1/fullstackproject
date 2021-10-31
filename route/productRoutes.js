const express = require('express');
const passport = require('passport');
const router = express.Router();
const jwt =require('jsonwebtoken');
const Product = require("../models/Product");
const config=require('../config/database');

router.post('/addProduct',(req,res,next)=>{
        let newProduct =new Product({
            name:req.body.name,
            number:req.body.number,
            category:req.body.category,
            price:req.body.price
        });
        Product.addProduct(newProduct,(err,product)=>{
            if(err){
                res.json({success:false,msg:'Failed to add product'});
        }else{
            res.json({success:true,msg:'product added'});
        }
        });
});

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

router.get('/productlist',(req,res,next)=>{
        Product.getProducts((err,products)=>{
                if(err){
                        res.json({success:false,msg:'Failed to get products'});
                }else{
                        res.json(products);
                }
        });
});

router.get('/category/:uid',(req,res,next)=>{
        Product.getProductsByCategory(req.params.uid,(err,products)=>{
                if(err){
                        res.json({success:false,msg:'Failed to get products'});
                }else{
                        res.json(products);
                }
        })
});
router.get('/product/:uid',(req,res,next)=>{
        Product.getProductById(req.params.uid,(err,product)=>{
                if(err){
                        res.json({success:false,msg:'Failed to get product'});
                }else{
                        res.json(product);
                }
        })
});
module.exports = router;