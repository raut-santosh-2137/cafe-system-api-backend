const express = require("express");
var cors = require("cors");
const conn = require("./db/connection");
const app = express();

const router = express.Router();
const userRoutes = require("./routers/user.route");

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/user", userRoutes);

// Routes

module.exports = app;
