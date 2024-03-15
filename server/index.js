const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const db = require('./db/index');

dotenv.config();

const authRouter = require('./routes/auth');
const userRouter = require('./routes/user');
const blogRouter = require('./routes/blog');
const categoryRouter = require('./routes/category');

db();
const PORT = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(express.json());

app.get('/',(req,res)=>{
    res.status(200).json({
        success:true,
        message:"Hello World"
    });
});

app.use("/uploads",express.static("uploads"));

app.use("/api/auth",authRouter);
app.use("/api/blog",blogRouter);
app.use("/api/user",userRouter);
app.use("/api/category",categoryRouter);

app.listen(PORT,()=>{
    console.log(`Server is running on PORT ${PORT}`);
});
