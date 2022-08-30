const express = require("express");
const app = express();
const mongoose = require("mongoose");
const db = require("./db");
const verification = require("./Middlewares/verify");
const userRoute = require("./Routes/user");
const productsRoute = require("./Routes/products");
const authRoute = require("./Routes/auth");
const adminauthRoute = require("./Routes/adminauth");
const stripeRoute = require("./Routes/stripe");
const orderRoute = require("./Routes/order");
require("dotenv").config();
const cors = require("cors");
const port = process.env.PORT || 5000;

// middleware

app.use(express.json({limit:"50mb"}));
app.get("/", (req, res) => res.send(`Server Running`));
app.use(cors());

// Route
app.use("/api/admin", adminauthRoute);
app.use("/api", authRoute);
app.use(verification);
app.use("/api", userRoute);
app.use("/api", productsRoute);
app.use("/api", orderRoute);
app.use("/api", stripeRoute);

// port
app.listen(port, console.log("server started ", port));
