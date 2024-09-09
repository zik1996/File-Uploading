const path = require("path");
const multer = require("multer");


const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, "./public/images")
    },
    filename : function(req, file, cb){
        let ext = path.extname(file.originalname);
        console.log(req.file);
        cb(null, Date.now() + ext)
    }
})

const upload = multer({
    storage:storage,
    fileFilter : function (req, file, cb){
        if(file.mimetype === "image/jpeg" || file.mimetype === "image/png", file.mimetype === "image/jpg"){
            cb(null, true)
        }else{
            console.log("only Jpg, jpeg, and png file supported")
            cb(null, false)
        }
    },
    limits : {
        fileSize : 1024 * 1024 * 2
    }
})

module.exports = upload