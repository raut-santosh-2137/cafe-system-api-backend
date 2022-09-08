const express = require("express");
const router = express.Router();
const User = require("../models/Users.model");

// Routes of user

router.get("/allusers", async (req, res) => {
  try {
    const users = await User.find();
    res.send(users);
  } catch (e) {
    res.send("users not found ");
  }
});

router.get("/:name", async (req, res) => {
  try {
    const name = req.params.name;
    // console.log(name);
    const user = await User.findOne({ name: name });
    if (!user) {
      return res.status(400).send("user not found");
    } else {
      return res.send(user);
    }
  } catch (e) {
    res.status(400).send(e);
  }
});

router.post("/signup", async (req, res) => {
  // console.log(req.body);
  const user = await User.findOne({ email: req.body.email })
    .then((user) => {
      if (user) {
        let errors = {};
        if (user.mobile === req.body.mobile) {
          errors.mobile = "Mobile already exists";
        } else if (user.email === req.body.email) {
          errors.email = "Email already exists";
        }
        return res.status(400).send(errors);
      } else {
        const user = new User(req.body);
        user
          .save()
          .then(() => res.status(201).send("User added"))
          .catch((e) => {
            res.status(500).send(e);
          });
      }
    })
    .catch((err) => {
      return res.status(500).send({
        error: err,
      });
    });
});

module.exports = router;
