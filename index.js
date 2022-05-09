const express = require("express");
const dotenv = require("dotenv");

const router = require("./routers/router");
const connection = require("./database/database");

const app = express();
dotenv.config({path: "./config.env"});
connection();

// parse JSON
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use("/", router);

app.listen(process.env.PORT || 3004, function() {
  console.log("server is listening");
});