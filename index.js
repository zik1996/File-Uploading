const express = require("express");
const app = express();

let upload = require("./mddleware/upload")

app.use(express.urlencoded({extended:true}))
app.use(express.json())

// For Multiple File using array 
//..............    upload.array('avatar',12)
app.post("/upload", upload.single("image"), (req, res)=>{
    console.log("File Uploaded Successfully")
    res.end();
})

app.listen(5000)

