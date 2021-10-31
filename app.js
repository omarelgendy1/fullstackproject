//impoting modules
var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var path = require('path');
var cors= require('cors');
var passport=require('passport');
var app = express();
const port = 3000;
const route= require('./route/route');
const productRoute=require('./route/productRoutes');
const userProductRoute=require('./route/UserProductRoutes');
const categoryRoute=require('./route/categoryRoutes');
const adminRoutes=require('./route/adminRoutes');
const config =require('./config/database');
const session = require("express-session");

//middleware 
mongoose.connect(config.database);
mongoose.connection.on('connected',()=>{
    console.log('connected to database @ 27107');
});
mongoose.connection.on('error',()=>{
    console.log('error in connection to database ' + err);
});
app.use(express.json());
app.use(cors());
app.use(session({secret: config.secret}));
app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);
app.use('/api',route);
app.use('/product',productRoute);
app.use('/userproduct',userProductRoute);
app.use('/category',categoryRoute);
app.use('/admin',adminRoutes);




app.use(express.static(path.join(__dirname, 'public')));
// testing server
app.get('/',(req,res)=>{
    res.send('fobar');
});

app.listen(port,()=>{
    console.log("server started at port " + port);
});