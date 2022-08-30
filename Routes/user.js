const route = require("express").Router();
const jwt = require("jsonwebtoken");
const db = require("../Models/registerschema");
const bcrypt = require("bcrypt");

// Get ALL USERS
route.get("/user/find", async (req, res) => {
  const query = req.query.new;
  try {
    const users = query
      ? await db.find().sort({ _id: -1 }).limit(1)
      : await db.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).send({ error: "cannot fetch user by id" });
  }
});

// Get By Id
route.get("/user/find/:id", async (req, res) => {
  try {
    const user = await db.findById(req.user._id);
    const { password, ...others } = user._doc;
    res.status(200).json(others);
  } catch (err) {
    res.status(500).send({ error: "cannot fetch user by id" });
  }
});

// Update
route.put("/userupdate", async (req, res) => {
  if (req.body.password) {
    req.body.password = bcrypt.hash(req.body.password, 10);
  }
  try {
    const updatedUser = await db.findByIdAndUpdate(
      req.user._id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

// DELETE
route.delete("/user/:id", async (req, res) => {
  try {
    const user = await db.findByIdAndDelete(req.params.id);

    res.status(200).json("User has been Deleted....");
  } catch (err) {
    res.status(500).send({ error: "cannot fetch user by id" });
  }
});

module.exports = route;
