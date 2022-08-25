const route = require("express").Router();
const jwt = require("jsonwebtoken");
const db = require("../Models/registerschema");
const bcrypt = require("bcrypt");
require("dotenv").config();

// Register
route.post("/register", async (req, res) => {
  try {
    let alreadyEmail = await db.findOne({ email: req.body.email }); //dbquery
    if (alreadyEmail) {
      return res.status(400).json("Email exist");
    }
    let pass = await bcrypt.hash(req.body.password, 10);

    const data = new db({
      name: req.body.name,
      email: req.body.email,
      password: pass,
      mobile: req.body.mobile,
      address: req.body.address,
      pincode: req.body.pincode,
      role: "user"
    });
    let user = await data.save();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).send("error");
  }
});

// Login
route.post("/login", async (req, res) => {
  try {
    let user = await db.findOne({ email: req.body.email }); //dbquery

    if (!user) {
      return res.status(400).json("Wrong credentials!");
    }

    let passwordValidation = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!passwordValidation) {
      return res.status(400).json("Your Password Wrong!");
    }

    let accessToken = jwt.sign(
      { _id: user._id, email: user.email, role: user.role },
      process.env.PASS_SEC
    );

    res.send(accessToken);
  } catch (err) {
    res.status(500).send("Wrong credentials...!");
  }
});

module.exports = route;

