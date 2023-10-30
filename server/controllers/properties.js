const PropertyModel = require("../models/property");

const PropertiesController = {
  getAllProperties: async (req, res) => {
    try {
      const properties = await PropertyModel.getAllProperties();
      res.json(properties);
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  getPropertyById: async (req, res) => {
    const propertyId = req.params.id;
    try {
      const property = await PropertyModel.getPropertyById(propertyId);
      if (property) {
        res.json(property);
      } else {
        res.status(404).json({ error: "Property not found" });
      }
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  createProperty: async (req, res) => {
    const propertyData = req.body;
    try {
      const newProperty = await PropertyModel.createProperty(propertyData);
      res.status(201).json(newProperty);
    } catch (error) {
      res.status(400).json({ error: "Invalid input data" });
    }
  },

  updateProperty: async (req, res) => {
    const propertyId = req.params.id;
    const propertyData = req.body;
    try {
      const updatedProperty = await PropertyModel.updateProperty(
        propertyId,
        propertyData
      );
      if (updatedProperty) {
        res.json(updatedProperty);
      } else {
        res.status(404).json({ error: "Property not found" });
      }
    } catch (error) {
      res.status(400).json({ error: "Invalid input data", error: error });
    }
  },

  deleteProperty: async (req, res) => {
    const propertyId = req.params.id;
    console.log("propertyId", propertyId);
    try {
      const isPropertyDeleted = await PropertyModel.deleteProperty(propertyId);
      if (isPropertyDeleted) {
        res.json({ message: "Property deleted successfully" });
      } else {
        res.status(404).json({ error: "Property not found" });
      }
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
};

module.exports = PropertiesController;
