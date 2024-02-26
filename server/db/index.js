const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const connectDB = async () => {
    try{
      await mongoose.connect(process.env.MONGO);
      console.log("Connected to Database");
    }catch(err){
      console.log('Failed to Connected To Database'); 
    }
};

module.exports = connectDB;