const express = require("express");
const router = express.Router();
const propertiesController = require("../controllers/properties");
const authMiddleware = require("../middleware/auth");

// Define routes
router.get("/", propertiesController.getAllProperties);
router.get("/:id", propertiesController.getPropertyById);
router.post("/", authMiddleware, propertiesController.createProperty);
router.put("/:id", authMiddleware, propertiesController.updateProperty);
router.delete("/:id", authMiddleware, propertiesController.deleteProperty);

module.exports = router;
