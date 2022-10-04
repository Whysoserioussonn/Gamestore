const Category = require('../models/categoryModel')

const categoryCtrl = {
    getCategories: async(req, res) =>{
        // to test controller out on Postman 
        //res.json("category test control")
        try {
            const categories = await Category.find()
            res.json(categories)
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
     }}


module.exports = categoryCtrl