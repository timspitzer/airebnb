const express = require("express");
const multer = require("multer");
const { postImage } = require("./upload.handlers.js");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/uploads/");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });
const router = express.Router();

router.post("/", upload.array("images"), postImage);

module.exports = router;
