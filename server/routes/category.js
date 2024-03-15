const express = require('express');
const { addCategory, deleteCategory, getAllCategories } = require('../controllers/category');
const { adminLogin } = require('../middlewares/auth');

const router = express.Router();

router.post('/new',adminLogin,addCategory);
router.get('/',adminLogin,getAllCategories);
router.delete('/:id',adminLogin,deleteCategory);

module.exports = router;