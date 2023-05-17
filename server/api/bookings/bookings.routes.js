const express = require("express");
const { getAllBookings, getBooking } = require("./bookings.handlers.js");
const router = express.Router();

// list all Bookings
router.get("/", getAllBookings);
router.get("/:id", getBooking);

module.exports = router;
