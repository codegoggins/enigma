const multer = require('multer');
const uuid = require('uuid');

const {v4} = uuid;

const storage = multer.diskStorage({
    destination(req,file,callback){
       callback(null,"uploads");
    },
    filename(req,file,callback){
        const id = v4();
        const extName = file.originalname.split(".").pop();
        const fileName = `${id}.${extName}`;
        callback(null,fileName);
    }
});

const singleUpload = multer({storage}).single("photo");

module.exports = {singleUpload};