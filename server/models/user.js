const db = require("../config/database.js");

const UserModel = {
  getAllUsers: async () => {
    try {
      const [rows] = await db.query("SELECT * FROM Users");
      return rows;
    } catch (error) {
      throw error;
    }
  },
  getUserById: async (userId) => {
    try {
      const [rows] = await db.query("SELECT * FROM Users WHERE user_id = ?", [
        userId,
      ]);
      if (rows.length > 0) {
        return rows[0];
      } else {
        return null; // User not found
      }
    } catch {
      throw error;
    }
  },
  createUser: async (userData) => {
    const { name, email, password, phoneNumber, address } = userData;
    try {
      const [result] = await db.query(
        "INSERT INTO Users (name, email, password, phone_number, address) VALUES (?, ?, ?, ?, ?)",
        [name, email, password, phoneNumber, address]
      );
      return { id: result.insertId };
    } catch (error) {
      throw error;
    }
  },
  updateUser: async (userId, userData) => {
    const { name, email, password, phoneNumber, address } = userData;
    try {
      let query = "UPDATE Users SET ";
      const values = [];

      if (name) {
        query += "name = ?, ";
        values.push(name);
      }
      if (email) {
        query += "email = ?, ";
        values.push(email);
      }
      if (password) {
        query += "password = ?, ";
        values.push(password);
      }
      if (phoneNumber) {
        query += "phone_number = ?, ";
        values.push(phoneNumber);
      }
      if (address) {
        query += "address = ?, ";
        values.push(address);
      }

      // Remove the trailing comma and space
      query = query.slice(0, -2);

      query += " WHERE user_id = ?";
      values.push(userId);

      const [result] = await db.query(query, values);

      if (result.affectedRows > 0) {
        return { id: userId };
      } else {
        return null; // User not found
      }
    } catch (error) {
      throw error;
    }
  },
  deleteUser: async (userId) => {
    try {
      const [result] = await db.query("DELETE FROM Users WHERE user_id = ?", [
        userId,
      ]);
      if (result.affectedRows > 0) {
        return true;
      } else {
        return false; // User not found
      }
    } catch (error) {
      throw error;
    }
  },
};

module.exports = UserModel;
