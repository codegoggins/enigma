const mongoose = require('mongoose');
const { calculateRating } = require('../utils/calculateRating');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { 
    type: String, 
    required: true, 
  },
  email: { 
    type: String, 
    required: true, 
    unique: true 
  },
  password: { 
    type: String, 
    required: true 
  },
  role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
  },
  photo:{
    type:String,
    required:true
  },
  savedPosts:[{
    type:Schema.Types.ObjectId,
    ref:'Blog'
  }],
  totalLikes:{
    type:Number,
    default:0,
  },
  totalDislikes:{
    type:Number,
    default:0,
  },
},{timestamps:true});


const User = mongoose.model('User', userSchema);

module.exports = User;
