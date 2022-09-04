const route = require("express").Router();
const jwt = require("jsonwebtoken");
const db = require("../Models/registerschema");
const bcrypt = require("bcrypt");
require("dotenv").config();
const nodemailer = require('nodemailer');
const sendgridTransport = require('nodemailer-sendgrid-transport');
 const crypto = require('crypto')



let transporter = nodemailer.createTransport({
  host: 'mail.gmail.com',
  port: 587,
  secure: true,
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASSWORD,
  },
  tls: {
    rejectUnauthorized: false
  }
})


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
}catch (err) {
  res.status(500).send("error");
}
})

 

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



route.post('/reset-password', (req, res) => {
  crypto.randomBytes(32, (err, buffer) => {
    if (err) {
      console.log(err)
    }
    const token = buffer.toString("hex")
    db.findOne({ email: req.body.email })
      .then(user => {
        if (!user) {
          return res.status(422).json({ error: "User dont exists with that email" })
        }
        user.resetToken = token
        user.expireToken = Date.now() + 3600000
        user.save().then((result) => {
          transporter.sendMail({
            to: user.email,
            from: process.env.EMAIL,
            subject: "Password Reset",
            html: `
                     <p>You requested for password reset</p>
                    <h2>click in this <a href="http://localhost:3000/password/${token}">link</a> to reset password</h2>
                     `
          })
          res.send(result)
        })

      })
  })
})


route.post('/new-password', (req, res) => {
  const newPassword = req.body.password
  const sentToken = req.body.token
  db.findOne({ resetToken: sentToken, expireToken: { $gt: Date.now() } })
    .then(user => {
      if (!user) {
        return res.status(422).json({ error: "Try again session expired" })
      }
      bcrypt.hash(newPassword, 12).then(hashedpassword => {
        user.password = hashedpassword
        user.resetToken = undefined
        user.expireToken = undefined
        user.save().then((saveduser) => {
          res.send(saveduser)
        })
      })
    })
})

module.exports = route;




