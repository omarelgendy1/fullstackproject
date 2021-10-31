const mongoose = require('mongoose');       
var ProductSchema = require("../models/Product.js").schema;


const UserSchema = mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        require : true
    },
    username : {
        type : String,
        require : true
    },
    password : {
        type : String,
        require : true
    },
    cart :[ProductSchema]
    
        

});
const User = module.exports = mongoose.model('User',UserSchema);


module.exports.getUserById=function(id,callback){
    User.findById(id,callback);
}
module.exports.getUserByUsername=function(username,callback){
    const query={username : username};
    User.findOne(query,callback);
}
 module.exports.addUser=function(newUser,callback){
        newUser.save(callback);
 }
 module.exports.getUsers=function(callback){
    User.find(callback);
 }

 module.exports.deleteUserById=function(user,callback){
    User.remove({id:user.id},callback);
 }



