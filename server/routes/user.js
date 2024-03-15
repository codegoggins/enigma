const express = require('express');
const { getAllUsers, getSingleUser, updateUser, deleteUser } = require('../controllers/user');
const { userLogin, adminLogin } = require('../middlewares/auth');
const router = express.Router();

router.get('/',adminLogin,getAllUsers);
router.get('/:id',userLogin,getSingleUser);
router.put('/:id',userLogin,updateUser);
router.delete('/:id',userLogin,deleteUser);

module.exports = router;