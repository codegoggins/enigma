const Category = require('../models/Category');

const addCategory = async (req,res) => {
    try{
        const {name} = req.body;

        const existingCategory = await Category.findOne({name});
        if(existingCategory){
            return res.status(400).json({
                success:false,
                message:"Category already exists",
            });
        }

        const newCategory = new Category({name});
        await newCategory.save();

        return res.status(200).json({
            success:true,
            message:"Category Added Successfully",
            category:newCategory,
        });
    }catch(error){
      return res.status(500).json({
        success:false,
        message:error.message,
      })
    }
}