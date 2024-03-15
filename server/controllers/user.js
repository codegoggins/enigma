const User = require('../models/User');

const getAllUsers = async (req, res) => {
    try {
      const users = await User.find();
      res.status(200).json({ success: true, users });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  };
  
const getSingleUser = async (req, res) => {
    try {
      const { id } = req.params;
  
      const user = await User.findById(id);
      if (!user) {
        return res.status(404).json({ success: false, message: "User not found" });
      }
  
      res.status(200).json({ success: true, user });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
};

const updateUser = async (req, res) => {
    const { id } = req.params;
    const updates = req.body;  
    console.log(updates);
    try {    
      const updatedUser = await User.findByIdAndUpdate(id, updates, { new: true }); 
      if (!updatedUser) {
          return res.status(404).json({ success: false, message: 'User not found' });
      }

      res.status(200).json({ success: true, user: updatedUser });
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        message: error.message 
      });
    }
};

const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const userId = req.user.id;
        
        if(id !== userId){
          return res.status(200).json({
            success:false,
            message:"You are not authorized to delete this post"
          });
        }

        const deletedUser = await User.findByIdAndDelete(id);
        if (!deletedUser) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }
        await Blog.deleteMany({ author: deletedUser._id });
        res.status(200).json({ 
          success: true, 
          message: 'User deleted successfully' 
        });
    } catch (error) {
        res.status(500).json({ 
          success: false, 
          message: error.message 
        });
    }
};


module.exports = {getAllUsers,getSingleUser,updateUser,deleteUser};
