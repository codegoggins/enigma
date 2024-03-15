const express = require('express');
const { registerUser, loginUser,generateOtp, adminLogin } = require('../controllers/auth');
const {singleUpload} = require('../middlewares/multer');
const router = express.Router();

router.post('/register',singleUpload,registerUser);
router.post('/register/otp',singleUpload,generateOtp);
router.post('/login',loginUser);
router.post('/admin-login',adminLogin);

module.exports = router;