const UserModel = require("../models/user.js");

const UsersController = {
  getAllUsers: async (req, res) => {
    try {
      const users = await UserModel.getAllUsers();
      res.json(users);
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  getUserById: async (req, res) => {
    const userId = req.params.id;
    try {
      const user = await UserModel.getUserById(userId);
      if (user) {
        res.json(user);
      } else {
        res.status(404).json({ error: "User not found" });
      }
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  createUser: async (req, res) => {
    const userData = req.body;
    try {
      const newUser = await UserModel.createUser(userData);
      res.status(201).json(newUser);
    } catch (error) {
      res.status(400).json({ error: "Invalid input data" });
    }
  },

  updateUser: async (req, res) => {
    const userId = req.params.id;
    const userData = req.body;
    try {
      const updatedUser = await UserModel.updateUser(userId, userData);
      if (updatedUser) {
        res.json(updatedUser);
      } else {
        res.status(404).json({ error: "User not found" });
      }
    } catch (error) {
      res.status(400).json({ error: "Invalid input data" });
    }
  },

  deleteUser: async (req, res) => {
    const userId = req.params.id;
    try {
      const deletedUser = await UserModel.deleteUser(userId);
      if (deletedUser) {
        res.json({ message: "User deleted successfully" });
      } else {
        res.status(404).json({ error: "User not found" });
      }
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
};

module.exports = UsersController;
