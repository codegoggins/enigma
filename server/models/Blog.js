const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  photo:{
    type:String,
  },
  likes: [{
    type: Schema.Types.ObjectId,
    ref: 'User',
  }],
  dislikes: [{
    type: Schema.Types.ObjectId,
    ref: 'User',
  }],
  comments: [{
    type: Schema.Types.ObjectId,
    ref: 'Comment'
  }],
  categories: [{
    type: Schema.Types.ObjectId,
    ref: 'Category',
  }],
},{timestamps:true});

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;
