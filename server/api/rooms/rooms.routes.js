const express = require("express");
const { getAllRooms, getRoom } = require("./rooms.handlers.js");
const router = express.Router();

// list all Rooms
router.get("/", getAllRooms);
router.get("/:id", getRoom);

module.exports = router;
