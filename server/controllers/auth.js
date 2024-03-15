const User = require('../models/User');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const otpGenerator = require('otp-generator');
const Otp = require('../models/Otp');
const nodemailer = require("nodemailer");

const registerUser = async (req,res) => {
    try{
        const {name,email,password,role,otp,photo} = req.body;

        const OTP = await Otp.findOne({email:email});
        if(!OTP){
            return res.status(200).json({
                success:false,
                message:"OTP Verification Failed"
            })
        }

        const checkOTP = await bcrypt.compare(otp,OTP.otp);

        if(!checkOTP){
            await Otp.findByIdAndDelete(OTP._id);
            return res.status(200).json({
                success:false,
                message:"OTP does not match. Please Signup Again"
            });
        }

        const salt = await bcrypt.genSalt(10);
		const hashedPassword = await bcrypt.hash(password, salt);
        const newUser = new User({
            name,
            email,
            password:hashedPassword,
            photo,
            role,
        });
        await newUser.save();
        await Otp.findByIdAndDelete(OTP._id);
        
        return res.status(200).json({
            success:true,
            user:newUser,
            message:`User Registered Successfully`,
        });

    }catch(error){
        return res.status(500).json({
            success:false,
            message:error.message,
        });  
    }
}

const generateOtp = async(req,res) => {
    try{
        const {name,email,password,confirmPassword} = req.body;
        let {role} = req.body;
        
		if (!name || !email || !password || !confirmPassword) {
			return res.status(200).json({
				success: false,
				message: "Please enter all fields",
			});
		}

        const photo = req.file;
        if(!photo){
			return res.status(200).json({
				success: false,
				message: "Please upload your profile picture",
			});            
        }

        const existingUser = await User.findOne({email});
        if(existingUser){
            return res.status(400).json({
                success:false,
                message:"User with Email Already Exists"
            });
        }
        
        if(password.length < 8){
            return res.status(400).json({
                success:false,
                message:"Password should be atleast 8 characters long"
            });            
        }

        if (!/[a-z]/.test(password)) {
			return res.status(400).json({
				success: false,
				message: "Password should contain atleast 1 lowercase character",
			});
		}

		if (!/[A-Z]/.test(password)) {
			return res.status(400).json({
				success: false,
				message: "Password should contain atleast 1 uppercase character",
			});
		}

		if (!/[0-9]/.test(password)) {
			return res.status(400).json({
				success: false,
				message: "Password should contain atleast 1 number",
			});
		}

        if (!/[!@#$%^&*]/.test(password)) {
			return res.status(400).json({
				success: false,
				message: "Password should contain atleast 1 special character",
			});
		}

		if (password !== confirmPassword) {
			return res.status(400).json({
				success: false,
				message: "Passwords do not match",
			});
		}
        
        let photoPath;
        if (req.file) {
         photoPath = req.file.path;
        }

        const OTP = otpGenerator.generate(6, { upperCaseAlphabets: false, specialChars: false });
        console.log(OTP);

        const salt = await bcrypt.genSalt(10);
		const hashedOtp = await bcrypt.hash(OTP, salt);
        const otp = new Otp({
            otp:hashedOtp,
            name,
            email,
            password,
            photo:photoPath,
            role,
        });
        const newOtp = await otp.save();

        const transporter = nodemailer.createTransport({
            service:"gmail",
            auth:{
                user:process.env.MAIL,
                pass:process.env.PASS
            }
        });

        const mailOptions = {
            from:process.env.MAIL,
            to:email,
            subject:"OTP Verification",
            html:`<h1>OTP for verification is ${OTP}</h1>`
        }

        transporter.sendMail(mailOptions,(error,info)=>{
            if(error){
                console.log("Error",error);
            }else{
                console.log("Email Sent " + info.response);
            }
        });

        return res.status(200).json({
            success:true,
            newOtp:newOtp,
            message:`OTP Generated Successfully`,
        });

    }catch(error){
        return res.status(500).json({
            success:false,
            message:error.message,
        })
    }
}

const loginUser = async (req,res) => {
    try{
        const {email,password} = req.body;
 
        if(!email || !password){
           return res.status(400).json({
             success:false,
             message:"Please Enter all fields"
           });
        }
 
        const user = await User.findOne({email});
        if(!user){
           return res.status(400).json({
             success:false,
             message:"User not found"
           });         
        }
        if(user.role !== "user"){
            return res.status(200).json({
                success:false,
                message:"Admin cannot login here"
            });
        }
 
        const checkPassword = await bcrypt.compare(password,user.password);
 
        if(!checkPassword){
           return res.status(400).json({
             success:false,
             message:"Invalid Credentials"
           });           
        }
 
        const token = jwt.sign({id:user._id,role:user.role},process.env.JWT_SECRET,{expiresIn:864000});
 
        res.status(200).json({
          success:true,
          message:"User logged in successfully",
          token,
          user:{
             id:user._id,
             name:user.name,
             email:user.email,
          }
        });
 
     }catch(error){
         return res.status(500).json({
             success:false,
             message:error,
         }); 
     }  
}