const express = require("express");
const router = express.Router();
const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

/* POST login. */
router.post("/login", async (req, res, next) => {
  const user = await User.findOne({ username: req.body.username });
  if (!user) {
    return res.status(500).send("Username does not exist!");
  }

  const passwordCorrect = await bcrypt.compare(
    req.body.password,
    user.password
  );
  if (passwordCorrect) {
    jwt.sign({ user }, "secretkey", (err, token) => {
      res.json(token);
    });
  } else {
    return res.status(500).send("Password incorrect");
  }
});

module.exports = router;
