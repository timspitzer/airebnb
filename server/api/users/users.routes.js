const express = require("express");
const { getAllUsers, getUser } = require("./users.handlers.js");
const router = express.Router();

// list all users
router.get("/", getAllUsers);
router.get("/:id", getUser);

module.exports = router;
