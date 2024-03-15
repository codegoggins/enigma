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

const getAllBlogs = async (req, res) => {
    try {
        const allBlogs = await Blog.find().populate([{path: "author",select: "-password"},{path:"categories",select:"name"}]);
        return res.status(200).json({
            success: true,
            message: 'All Blogs Fetched Successfully',
            blogs: allBlogs,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error,
        });
    }
};

const getSingleBlog = async (req, res) => {
    try {
        const {id} = req.params;

        const singleBlog = await Blog.findById(id).populate({
            path: 'author',
            select: '-password',
        });

        return res.status(200).json({
            success: true,
            message: 'Blog Fetched Successfully',
            blog:singleBlog,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error,
        });
    }
};

const likeBlog = async (req, res) => {
    const blogId = req.params.id;
    const userId = req.user.id;
    try {

        const blog = await Blog.findById(blogId);
        if(!blog){
            return res.status(200).json({
                success:false,
                message:"Blog not found"
            });
        }

        if(!blog.likes.includes(userId)){
            await User.findByIdAndUpdate(blog.author,{
                $inc:{totalLikes:1}
            });
        }
        if(blog.dislikes.includes(userId)){
            await User.findByIdAndUpdate(blog.author,{
                $inc:{totalDislikes:-1}
            });
        }

        const updatedBlog = await Blog.findByIdAndUpdate(blogId,{
            $addToSet: { likes: userId },
            $pull :{dislikes : userId}
        });

        return res.status(200).json({
            success: true,
            message: "Blog liked successfully",
            updatedBlog:updatedBlog,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

const dislikeBlog = async (req, res) => {
    const blogId = req.params.id;
    const userId = req.user.id;
    try {
        const blog = await Blog.findById(blogId);
        if(!blog){
            return res.status(200).json({
                success:false,
                message:"Blog not found"
            });
        }

        if(!blog.dislikes.includes(userId)){
            await User.findByIdAndUpdate(blog.author,{
                $inc:{totalDislikes:1}
            });
        }
        if(blog.likes.includes(userId)){
            await User.findByIdAndUpdate(blog.author,{
                $inc:{totalLikes:-1}
            });
        }

        const updatedBlog = await Blog.findByIdAndUpdate(blogId,{
            $addToSet: { dislikes: userId },
            $pull :{likes : userId}
        });

        return res.status(200).json({
            success: true,
            message: "Blog disliked successfully",
            updatedBlog:updatedBlog,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};