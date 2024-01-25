const express = require("express");
const cors = require('cors');
const app = express();
const multer  = require('multer');
const path = require("path");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "images")
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
})
const upload = multer({ storage: storage });

// const corsOptions = {
//     origin: "http://127.0.0.1:5501/",
// };

app.use(express.json())
app.use(express.urlencoded({ extended: false}))
app.use(cors())

app.post("/",  upload.single('image'), (req, res, next) => {
    res.json({
        name: "ASNFA"
    })
    next()
})

app.get("/images/:name", (req, res) => {

})

app.listen(3000, () => {
    console.log("Server is running")
})