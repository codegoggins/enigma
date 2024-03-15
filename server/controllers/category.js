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

const getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find();

    return res.status(200).json({
      success: true,
      message: "Categories retrieved successfully",
      categories,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

const deleteCategory = async (req, res) => {
  try {
    const categoryId = req.params.id;

    const category = await Category.findByIdAndDelete(categoryId);

    if (!category) {
      return res.status(404).json({
        success: false,
        message: "Category not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Category deleted successfully",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

module.exports = {addCategory,getAllCategories,deleteCategory};
