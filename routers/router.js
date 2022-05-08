const express = require("express");
const router = express.Router();

router.post("/user", function(req, res) {
  res.send("create a user");
});
router.get("/users", function(req, res) {
  res.send("get all users");
});
router.get("/user/:id", function(req, res) {
  res.send("get a user");
});
router.put("/user/:id", function(req, res) {
  res.send("update a user");
});
router.delete("/user/:id", function(req, res) {
  res.send("delete a user");
});

module.exports = router;