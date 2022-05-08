const express = require("express");
const router = express.Router();

const controller = require("../controllers/controller");

router.post("/user", controller.createUser);
router.get("/users", controller.getAllUser);
router.get("/user/:id", controller.getUser);
router.put("/user/:id", controller.updateUser);
router.delete("/user/:id", controller.deleteUser);

module.exports = router;