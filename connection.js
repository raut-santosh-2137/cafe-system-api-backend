// const mysql = require("mysql");
const mongoose = require("mongoose");
require("dotenv").config();

// let connection = mysql.createConnection({
//   port: process.env.DB_PORT,
//   host: process.env.DB_HOST,
//   user: process.env.DB_USERNAME,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME,
// });

// connection.connect((error) => {
//   if (!error) {
//     console.log("Connected");
//   } else {
//     console.log(error);
//   }
// });

// module.exports = connection;

// let url =
//   "mongodb://" +
//   process.env.DB_HOST +
//   "/" +
//   process.env.DB_PORT +
//   "/" +
//   process.env.DB_NAME;

mongoose.connect("mongodb://127.0.0.1:27017/task-manager-api", {
  useNewUrlParser: true,
});

const User = mongoose.model("User", {
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
});

const me = new User({
  name: "sam",
  age: 38,
});

me.save()
  .then(() => {
    console.log(me);
  })
  .catch((error) => {
    console.log(error);
  });
