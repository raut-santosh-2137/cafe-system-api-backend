const mongoose = require("mongoose");
const validator = require("validator");
const usersSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  mobile: {
    type: Number,
    required: false,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        console.log("Invalid Email");
        throw new Error("Invalid Email");
      }
    },
  },
  password: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: false,
  },
  role: {
    type: String,
    required: true,
  },
});

// creating model now

const Users = new mongoose.model("Users", usersSchema);

module.exports = Users;
