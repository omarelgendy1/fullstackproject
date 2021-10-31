
const mongoose = require('mongoose');  

const ProductSchema = mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    number :{
        type :String,
        required:true
    },
    category :{
        type :String,
        required:true
    },  
    price :{
        type :String,
        required:true
    },  

});
const Product = module.exports = mongoose.model('Product',ProductSchema);

//fetch product by id in database
module.exports.getProductById=function(id,callback){
    Product.findById(id,callback);
}
//fetch product by name from database
module.exports.getProductByName=function(name,callback){
    const query={name : name};
    Product.findOne(query,callback);
}

//add product in database
 module.exports.addProduct=function(newProduct,callback){
        newProduct.save(callback);
 }

 //get all products in database
 module.exports.getProducts=function(callback){
    Product.find(callback);
 }

 //fetch products in a category from data base
 module.exports.getProductsByCategory=function(category,callback){
    const query={category : category};
    Product.find(query,callback);
 }
 module.exports.deleteProductById=function(product,callback){
    Product.deleteOne({id:product},callback);
 }