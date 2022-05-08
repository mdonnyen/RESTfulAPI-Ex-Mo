const express = require("express");
const dotenv = require("dotenv");

const app = express();
dotenv.config({path: "./config.env"});

// parse JSON
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use("/", function(req, res) {
  res.send("Hello MDonnyEN");
});

app.listen(process.env.PORT || 3004, function() {
  console.log("server is listening");
});