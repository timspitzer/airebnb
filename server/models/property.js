const db = require("../config/database.js");

const PropertyModel = {
  getAllProperties: async () => {
    try {
      const [rows] = await db.query("SELECT * FROM Properties");
      return rows;
    } catch (error) {
      throw error;
    }
  },

  getPropertyById: async (propertyId) => {
    try {
      const [rows] = await db.query(
        "SELECT * FROM Properties WHERE property_id = ?",
        [propertyId]
      );
      if (rows.length > 0) {
        return rows[0];
      } else {
        return null; // Property not found
      }
    } catch (error) {
      throw error;
    }
  },

  createProperty: async (propertyData) => {
    const {
      hostId,
      propertyName,
      propertyType,
      numBedrooms,
      numBathrooms,
      maxGuests,
      description,
      pricePerNight,
      location,
    } = propertyData;
    try {
      const [result] = await db.query(
        "INSERT INTO Properties (host_id, property_name, property_type, num_bedrooms, num_bathrooms, max_guests, description, price_per_night, location) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
        [
          hostId,
          propertyName,
          propertyType,
          numBedrooms,
          numBathrooms,
          maxGuests,
          description,
          pricePerNight,
          location,
        ]
      );
      return { id: result.insertId };
    } catch (error) {
      throw error;
    }
  },

  updateProperty: async (propertyId, propertyData) => {
    const {
      hostId,
      propertyName,
      propertyType,
      numBedrooms,
      numBathrooms,
      maxGuests,
      description,
      pricePerNight,
      location,
    } = propertyData;

    try {
      let query = "UPDATE Properties SET ";
      const values = [];

      if (hostId) {
        query += "host_id = ?, ";
        values.push(hostId);
      }
      if (propertyName) {
        query += "property_name = ?, ";
        values.push(propertyName);
      }
      if (propertyType) {
        query += "property_type = ?, ";
        values.push(propertyType);
      }
      if (numBedrooms) {
        query += "num_bedrooms = ?, ";
        values.push(numBedrooms);
      }
      if (numBathrooms) {
        query += "num_bathrooms = ?, ";
        values.push(numBathrooms);
      }
      if (maxGuests) {
        query += "max_guests = ?, ";
        values.push(maxGuests);
      }
      if (description) {
        query += "description = ?, ";
        values.push(description);
      }
      if (pricePerNight) {
        query += "price_per_night = ?, ";
        values.push(pricePerNight);
      }
      if (location) {
        query += "location = ?, ";
        values.push(location);
      }

      // Remove the trailing comma and space
      query = query.slice(0, -2);

      query += " WHERE property_id = ?";
      values.push(propertyId);

      const [result] = await db.query(query, values);

      if (result.affectedRows > 0) {
        return { id: propertyId };
      } else {
        return null; // Property not found
      }
    } catch (error) {
      throw error;
    }
  },

  deleteProperty: async (propertyId) => {
    try {
      const [result] = await db.query(
        "DELETE FROM Properties WHERE property_id = ?",
        [propertyId]
      );
      if (result.affectedRows > 0) {
        return true;
      } else {
        return false; // Property not found
      }
    } catch (error) {
      throw error;
    }
  },
};

module.exports = PropertyModel;
