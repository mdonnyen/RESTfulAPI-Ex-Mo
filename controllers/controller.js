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
  getUser: async function(req, res) {
    try {
      const user = await Model.findById(req.params.id);
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({message: error.message});
    }
  },
  updateUser: async function(req, res) {
    const idCheck = await Model.findById(req.params.id);
    if(!idCheck) {
      return res.status(404).json("user not found");
    }
    try {
      const updatedUser = await Model.updateOne({_id: req.params.id}, {$set: req.body});
      res.status(200).json(updatedUser);
    } catch (error) {
      res.status(500).json({message: error.message});
    }
  },
  deleteUser: function(req, res) {
    res.send("delete a user");
  }
}