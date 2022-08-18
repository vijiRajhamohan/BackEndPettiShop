
const express =require ("express");
const app=express();
const mongoose =require ("mongoose");
const userRoute  = require("./Routes/user");
const productsRoute = require("./Routes/products");
const authRoute = require("./Routes/auth");
const adminauthRoute = require("./Routes/adminauth");
const stripeRoute = require("./Routes/stripe");
require("dotenv").config();
const orderRoute = require("./Routes/order");
const cors =require ("cors");
const port = process.env.PORT || 5000

// middleware

app.use(express.json());
app.get("/", (req, res) => res.send(`Server Running`));
app.use(cors());

// db

mongoose.connect(
  process.env.MONGO_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () =>{ 
    try{
    console.log("database start");
  }catch(error){
console.log(error);
console.log("could not connect to database!");
  }}
);


// Route


app.use("/api",authRoute);
app.use("/api",userRoute);
app.use("/api",productsRoute);

app.use("/api", orderRoute);
app.use("/api", stripeRoute);
app.use("/api/admin", adminauthRoute);

// port
app.listen(port,console.log("server started"));




// require ("dotenv").config();
// const express = require("express");
// const app = express();
// const connection=require("./db")
// // const  route  = require("./router");
// const cors =require ("cors")

// //db connection
// connection();

// // // middleware

// app.use(express.json());
// app.use(cors());


// const port = process.env.PORT||5000;
// app.listen(port, ()=> console.log(`server started on ${port}..`));