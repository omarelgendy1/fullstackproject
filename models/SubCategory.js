const mongoose = require('mongoose');  


const SubCategorySchema = mongoose.Schema({
        subCategory:{
            type:String,
            required:true
        }

});
const subCategories = module.exports = mongoose.model('SubCategory',SubCategorySchema);

module.exports.getSubCategories=function(callback){
    subCategories.find(callback);
 }