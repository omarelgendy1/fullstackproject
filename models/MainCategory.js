const mongoose = require('mongoose');  


const MainCategorySchema = mongoose.Schema({
        mainCategory:{
            type:String,
            required:true
        }

});
const MainCategories = module.exports = mongoose.model('MainCategory',MainCategorySchema);

module.exports.getMainCategories=function(callback){
    MainCategories.find(callback);
 }
 module.exports.addCategory=function(category,callback){
    category.save(callback);
    

 }