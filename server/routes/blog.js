const express = require('express');
const { createBlog, getAllBlogs, getSingleBlog, dislikeBlog, likeBlog, addComment, getAllComments, getAllBlogsByCategory } = require('../controllers/blog');
const { userLogin } = require('../middlewares/auth');
const { singleUpload } = require('../middlewares/multer');
const router = express.Router();

router.post('/create',userLogin,singleUpload,createBlog);
router.get('/',getAllBlogs);
router.get('/:id',getSingleBlog);
router.post('/like/:id',userLogin,likeBlog);
router.post('/dislike/:id',userLogin,dislikeBlog);
router.post('/comment/:id',userLogin,addComment);
router.post('/comments/:id',userLogin,getAllComments);
router.get('/category/:tag',getAllBlogsByCategory);

module.exports = router;