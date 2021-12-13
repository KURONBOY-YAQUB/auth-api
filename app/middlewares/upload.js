const path = require("path");
const multer = require("multer");

let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    let ext = path.extname(file.originalname);
    cb(null, Date.now() + ext);
  },
});

let upload = multer({
  storage: storage,
  fileFilter: (req, file, callback) => {
    if (file.mimetype == "audio/mp3" || file.mimetype == "audio/mp4") {
      callback(null, true);
    } else {
      console.log("only mp3 & mp4 file supported!");
      callback(null, false);
    }
  },
});

module.exports = upload;
