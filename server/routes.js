const express = require("express");
const usersRoutes = require("./api/users/users.routes.js");
const bookingsRoutes = require("./api/bookings/bookings.routes.js");
const roomsRoutes = require("./api/rooms/rooms.routes.js");
const uploadRoutes = require("./api/upload/upload.routes.js");
const router = express.Router();

router.use("/api/users", usersRoutes);
router.use("/api/bookings", bookingsRoutes);
router.use("/api/rooms", roomsRoutes);
router.use("/api/upload", uploadRoutes);

module.exports = router;
