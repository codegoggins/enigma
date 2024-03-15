const Blog = require("../models/Blog");
const Comment = require("../models/Comment");
const Category = require("../models/Category");
const User = require("../models/User");


const createBlog = async (req,res) => {
    try{
        const {id} = req.user;
        const {title,content,categories} = req.body;

        if(!title || !content){
            return res.status(400).json({
                success:false,
                message:"Enter all fields",
            });
        }

        let photoPath = "";
        if(req.file){
            photoPath = req.file.path;
        }
        console.log(photoPath);


        const newBlog = new Blog({
            title,
            content,
            author:id,
            categories:categories,
            photo:photoPath
        });

        await newBlog.save();
        const mergedBlog = await Blog.findById(newBlog._id).populate([
            {path:"author",select:"-password"},
            {path:"categories",select:"name"},
        ]
        );

        return res.status(200).json({
            success:true,
            message:"Blog Created Successfully",
            blog:mergedBlog,
        });

    }catch(error){
        return res.status(500).json({
            success:false,
            message:error
        });
    }
}