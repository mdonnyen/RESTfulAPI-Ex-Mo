const mongoose = require("mongoose");

const Model = mongoose.Schema({
  _id: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  email: String
});

module.exports = mongoose.model("Model", Model);