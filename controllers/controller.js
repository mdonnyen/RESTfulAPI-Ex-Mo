const Model = require("../models/model");

module.exports = {
  createUser: async function(req, res) {
    const newUser = await new Model(req.body) ;
    try {
      const user = await newUser.save();
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({message: error.message});
    }
  },
  getAllUser: async function(req, res) {
    try {
      const users = await Model.find();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({message: error.message});
    }
  },
  getUser: function(req, res) {
    res.send("get a user");
  },
  updateUser: function(req, res) {
    res.send("update a user");
  },
  deleteUser: function(req, res) {
    res.send("delete a user");
  }
}