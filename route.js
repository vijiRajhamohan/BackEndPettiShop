// // // Register
// // route.post("/register",async(req,res)=>{
// //     try{
// //       let username = await db.findOne({ email: req.body.email }); //dbquery
// //       if(username){
// //         return res.status(400).json("Email exist");
// //       }
// //       let pass = await bcrypt.hash(req.body.password, 10);

// //       const data = new db({
// //         name: req.body.name,
// //         email: req.body.email,
// //         password: pass,
// //         mobile: req.body.mobile,
// //         address: req.body.address,
// //         pincode: req.body.pincode,
// //       });
// //       let user = await data.save();
// //       res.status(200).json(user);
// //     }catch(err){
// // res.status(500).send("error");
// //     }

// // })

// // // Login
// // route.post("/login", async (req, res) => {
// //   try {
// //     let username = await db.findOne({ email: req.body.email }); //dbquery

// //     if (!username) {
// //       return res.status(400).json("please register");
// //     }
    
// // let passwordValidation = await bcrypt.compare(
// //   req.body.password,
// //   username.password
// // );
// // if (!passwordValidation) {
// //   return res.status(400).json("Your Password Wrong");
// // }
// // let accessToken = jwt.sign({ email: username.email }, "userinfoSecretId");

// // // **** user details and token  **** //

// //   // const {password, ...others} =username._doc;
// //   //  res.status(200).json({...others,accessToken});
  
// //   res.header("auth", accessToken).send(accessToken); 
// //   } catch (err) {
// //     res.status(500).send("error");
// //   }
// // });

// // Products
// // Post
// route.post("/products", async (req, res) => {
//     try {

//         const data = new item({
//             image: req.body.image,
//             id: req.body.id,
//             itemCategory: req.body.itemCategory,
//             category: req.body.category,
//             name: req.body.name,
//             quantity: req.body.quantity,
//             price: req.body.price,
//         });
//         let user = await data.save();
//         res.status(200).json(user);
//     } catch (err) {
//         res.status(500).send("error");
//     }
// });

// // GetALL
// route.get("/productsDetails", async (req, res) => {
//     try {
//         const data = await item.find();
//         res.status(200).json(data);
//     } catch (err) {
//         res.status(500).send("error");
//     }
// });

// // GetById
// route.get("/productsDetails/:id", async (req, res) => {
//     try {
//         const data = await item.findOne({ _id: ObjectId(req.params.id) });
//         res.status(200).json(data);
//     } catch (err) {
//         res.status(500).send({ error: "cannot fetch product by id" });
//     }
// });


// // Update



// // Delete



// // USER 



// const route = require("express").Router();
// const jwt = require("jsonwebtoken");
// const db = require("../Models/registerschema");
// const bcrypt = require("bcrypt");
// const { ObjectId } = require("mongodb");
// const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("./verifyToken");


// // Register
// route.post("/register", async (req, res) => {
//     try {
//         let alreadyEmail = await db.findOne({ email: req.body.email }); //dbquery
//         if (alreadyEmail) {
//             return res.status(400).json("Email exist");
//         }
//         let pass = await bcrypt.hash(req.body.password, 10);

//         const data = new db({
//             name: req.body.name,
//             email: req.body.email,
//             password: pass,
//             mobile: req.body.mobile,
//             address: req.body.address,
//             pincode: req.body.pincode,
//         });
//         let user = await data.save();
//         res.status(200).json(user);
//     } catch (err) {
//         res.status(500).send("error");
//     }

// })




// // Login
// route.post("/login", async (req, res) => {
//     try {
//         let user = await db.findOne({ email: req.body.email }); //dbquery

//         if (!user) {
//             return res.status(400).json("Wrong credentials!");
//         }

//         let passwordValidation = await bcrypt.compare(
//             req.body.password,
//             user.password
//         );
//         if (!passwordValidation) {
//             return res.status(400).json("Your Password Wrong!");
//         }

//         let accessToken = jwt.sign({ email: user.email, isAdmin: user.isAdmin }, "SecretKey");

//         // **** user details and token  **** //

//         const { password, ...others } = user._doc;
//         res.status(200).json({ ...others, accessToken });

//         //  res.header("auth", accessToken).send(accessToken); 
//     } catch (err) {
//         res.status(500).send("Wrong credentials...!");
//     }
// });




// // Get ALL USERS (verifyTokenAndAdmin)
// route.get("/", async (req, res) => {
//     const query = req.query.new;
//     try {
//         // const users = await db.find();
//         const users = query
//             ? await db.find().sort({ _id: -1 }).limit(1)
//             : await db.find();
//         res.status(200).json(users);
//     } catch (err) {
//         res.status(500).send({ error: "cannot fetch user by id" });
//     }
// });



// // Get By Id (verifyTokenAndAdmin)
// route.get("/find/:id", async (req, res) => {
//     try {
//         const user = await db.findById(req.params.id);
//         const { password, ...others } = user._doc;
//         res.status(200).json(others);
//     } catch (err) {
//         res.status(500).send({ error: "cannot fetch user by id" });
//     }
// });



// // Update ( verifyTokenAndAuthorization)
// route.put("/:id", async (req, res) => {
//     if (req.body.password) {
//         req.body.password = bcrypt.hash(req.body.password, 10);
//     }
//     try {
//         const updatedUser = await db.findByIdAndUpdate(
//             req.params.id,
//             {
//                 $set: req.body,
//             },
//             { new: true }
//         );
//         res.status(200).json(updatedUser);
//     } catch (err) {
//         res.status(500).json(err);

//     }
// });



// // DELETE  (verifyTokenAndAdmin or verifyTokenAndAuthorization)
// route.delete("/:id", async (req, res) => {
//     try {
//         const user = await db.findByIdAndDelete(req.params.id);

//         res.status(200).json("User has been Deleted....");
//     } catch (err) {
//         res.status(500).send({ error: "cannot fetch user by id" });
//     }
// });



// // // GET USER STATS (verifyTokenAndAdmin)
// // route.get("/user/stats", async (req, res) => {
// //   const date = new Date();
// //   const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));
// //   try {
// //     const data = await db.aggregate([
// //       { $match: { createdAt: { $gte: lastYear } } },
// //       { $project: { month: { $month: "createdAt" }, } ,},
// //       { $group: { _id: "$month", total: { $sum: 1 }, }, },
// //     ]);
// //     res.status(200).json(data);
// //   } catch (err) {
// //     res.status(500).json({ error: "cannot fetch " });
// //   }
// // })





