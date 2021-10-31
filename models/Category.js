const mongoose = require('mongoose');


const CategorySchema = mongoose.Schema({
    mainCategory: {
        type: String,
        required: true
    },
    subCategory: {
        type: String,
        required: true
    }

});

const Category = module.exports = mongoose.model('Category', CategorySchema);
//get all categories
module.exports.getCategories = function (callback) {
    Category.find(callback);
}
//add category
module.exports.addCategory = function (category, callback) {
    category.save(callback);


}
//delete category by 
module.exports.deleteCategory = function (category, callback) {
    Category.deleteOne({ id: category.id }, callback);
}