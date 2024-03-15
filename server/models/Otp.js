const mongoose = require('mongoose');

const OtpSchema = new mongoose.Schema({
    otp:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    name:{
        type:String,
        required:true,     
    },
    password:{
        type:String,
        required:true,
    },
    photo:{
        type:String,
        required:true,
    }
},{timestamps:true});

const Otp = mongoose.model('Otp', OtpSchema);
module.exports = Otp;