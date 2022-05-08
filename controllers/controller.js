module.exports = {
  createUser: function(req, res) {
    res.send("create a user");
  },
  getAllUser: function(req, res) {
    res.send("get all users");
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