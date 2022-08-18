const route = require("express").Router();
const jwt = require("jsonwebtoken");
const db = require("../Models/registerschema");
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
            mobile: req.body.mobile,
            address: req.body.address,
            pincode: req.body.pincode,
        });
        let user = await data.save();
        res.status(200).json(user);
    } catch (err) {
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

        let accessToken = jwt.sign({ _id: user._id, email: user.email }, process.env.PASS_SEC);

        // **** user details and token  **** //

        // const { password, ...others } = user._doc;
        // res.status(200).json({ ...others, accessToken });

          res.send(accessToken); 
    } catch (err) {
        res.status(500).send("Wrong credentials...!");
    }
});


module.exports = route;














// const route = require("express").Router();
// const jwt = require("jsonwebtoken");
// const CryptoJs = require("crypto-js");
// const User = require("../Models/registerschema");
// //  const bcrypt = require("bcrypt");
// // const { ObjectId } = require("mongodb");
// // const { verifyToken, verifyTokenAndAuthorization } = require("./verifyToken");

// // Register
// route.post("/register", async (req, res) => {
//     const newUser = new User({
//         name: req.body.name,
//         email: req.body.email,
//         password: CryptoJs.AES.encrypt(
//             req.body.password,
//              "SecretKey")
//              .toString(),
//         mobile: req.body.mobile,
//         address: req.body.address,
//         pincode: req.body.pincode,
//     });
//     try {
//         const saveUser = await newUser.save();
//         res.status(201).json(saveUser);
//     } catch (err) {
//         res.status(500).send("error");
//     }
// });

// // Login
// route.post("/login", async (req, res) => {
//     try {
//         const user = await User.findOne({ email: req.body.email });
//         !user && res.status(401).json("Wrong credentials!");

//         const hashedPassword = CryptoJS.AES.decrypt(
//             user.password,
//             "SecretKey"
//             );
//         const OriginalPassword = hashedPassword.toString(CryptoJs.enc.Utf8);
//         OriginalPassword !== req.body.password &&
//         res.status(401).json("Your Password Wrong!");

//         const accessToken = jwt.sign(
//             {
//                 email: user.email,
//                  isAdmin: user.isAdmin, },
//              "Secretkey");
//         const {password, ...others} =user._doc;
//        res.status(200).json({...others,accessToken});

//     } catch (err) {
//         res.status(500).send(err);
//     }
// });










// module.exports = route;