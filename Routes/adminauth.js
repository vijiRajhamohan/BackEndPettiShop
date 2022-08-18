const route = require("express").Router();
const jwt = require("jsonwebtoken");
const db = require("../Models/adminSchema");
const bcrypt = require("bcrypt");
const { ObjectId } = require("mongodb");
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
            mobile: req.body.mobile
          
        });
        let admin = await data.save();
        res.status(200).json(admin);
    } catch (err) {
        res.status(500).send("error");
    }

})




// Login
route.post("/login", async (req, res) => {
    try {
        let admin = await db.findOne({ email: req.body.email }); //dbquery

        if (!admin) {
            return res.status(400).json("Wrong credentials!");
        }

        let passwordValidation = await bcrypt.compare(
            req.body.password,
            admin.password
        );
        if (!passwordValidation) {
            return res.status(400).json("Your Password Wrong!");
        }

        let adminToken = jwt.sign({ _id: admin._id, email: admin.email }, process.env.PASS_SEC);

        // **** user details and token  **** //

        // const { password, ...others } = user._doc;
        // res.status(200).json({ ...others, accessToken });

        res.send(adminToken);
    } catch (err) {
        res.status(500).send("Wrong credentials...!");
    }
});


module.exports = route;














