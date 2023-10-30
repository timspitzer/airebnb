const express = require("express");
const router = express.Router();
const usersController = require("../controllers/users.js");
const authMiddleware = require("../middleware/auth");

// Define routes
router.get("/", authMiddleware, usersController.getAllUsers);
router.get("/:id", authMiddleware, usersController.getUserById);
router.post("/", authMiddleware, usersController.createUser);
router.put("/:id", authMiddleware, usersController.updateUser);
router.delete("/:id", authMiddleware, usersController.deleteUser);

module.exports = router;
