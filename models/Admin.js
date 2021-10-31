const mongoose = require('mongoose');       



const AdminShcema = mongoose.Schema({
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
    position:{
        type : String,
        require : true
    }
    
        

});
const Admin = module.exports = mongoose.model('Admin',AdminShcema);


module.exports.getAdminById=function(id,callback){
    Admin.findById(id,callback);
}
module.exports.getAdminByUsername=function(username,callback){
    const query={username : username};
    Admin.findOne(query,callback);
}
 module.exports.addAdmin=function(newAdmin,callback){
        newAdmin.save(callback);
 }
 module.exports.getAdmins=function(callback){
    Admin.find(callback);
 }



