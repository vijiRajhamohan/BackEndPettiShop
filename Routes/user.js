const route = require("express").Router();
const jwt = require("jsonwebtoken");
const db = require("../Models/registerschema");
const bcrypt = require("bcrypt");

// Get ALL USERS (verifyTokenAndAdmin)
route.get("/user/find", async (req, res) => {
  const query = req.query.new;
  try {
    // const users = await db.find();
    const users = query
      ? await db.find().sort({ _id: -1 }).limit(1)
      : await db.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).send({ error: "cannot fetch user by id" });
  }
});

// Get By Id (verifyTokenAndAdmin)
route.get("/user/find/:id", async (req, res) => {
  try {
    const user = await db.findById(req.params.id);
    const { password, ...others } = user._doc;
    res.status(200).json(others);
  } catch (err) {
    res.status(500).send({ error: "cannot fetch user by id" });
  }
});

// Update ( verifyTokenAndAuthorization)
route.put("/user/find/:id", async (req, res) => {
  if (req.body.password) {
    req.body.password = bcrypt.hash(req.body.password, 10);
  }
  try {
    const updatedUser = await db.findByIdAndUpdate(
      req.params.id,
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

// DELETE  (verifyTokenAndAdmin or verifyTokenAndAuthorization)
route.delete("/user/:id", async (req, res) => {
  try {
    const user = await db.findByIdAndDelete(req.params.id);

    res.status(200).json("User has been Deleted....");
  } catch (err) {
    res.status(500).send({ error: "cannot fetch user by id" });
  }
});

// // GET USER STATS (verifyTokenAndAdmin)
route.get("/user/stats", async (req, res) => {
  const date = new Date();
  const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));
  try {
    const data = await db.aggregate([
      { $match: { createdAt: { $gte: lastYear } } },
      {
        $project: {
          month: { $month: "$createdAt" },
        },
      },
      {
        $group: {
          _id: "$month",
          total: { $sum: 1 },
        },
      },
    ]);
    res.status(200).json(data);
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: "cannot fetch " });
  }
});

module.exports = route;
