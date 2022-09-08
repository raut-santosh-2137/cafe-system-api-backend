// const mysql = require("mysql");
const mongoose = require("mongoose");
require("dotenv").config();

// connect online mongodb atlas link
mongoose.connect("mongodb+srv://sam:P2Q0wVEIuyDV9Nbp@cluster0.mglis6g.mongodb.net/cafe-system?retryWrites=true&w=majority", {
  useNewUrlParser: true,
}).then(() => {console.log('connected to online database')}).catch((e) => {console.log('Error: ', e)})

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

// offline database local
// mongoose.connect("mongodb://127.0.0.1:27017/task-manager-api", {
//   useNewUrlParser: true,
// });

// const User = mongoose.model("User", {
//   name: {
//     type: String,
//     required: true,
//   },
//   age: {
//     type: Number,
//     required: true,
//   },
// });

// const me = new User({
//   name: "rama",
//   age: 38,
// });

// me.save()
//   .then(() => {
//     console.log(me);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
