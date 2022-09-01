const route = require("express").Router();
const Order = require("../Models/orderSchema");
const nodemailer = require("nodemailer");
const sendgridtransport = require("nodemailer-sendgrid-transport")

// Email conformation
let transporter = nodemailer.createTransport({
    host: 'mail.gmail.com',
    port: 587,
    secure: true,
    service: "gmail",
    auth: {
        user: "pettishop2022@gmail.com",
        pass: "tnitmxgdlhcpxsoq",
    },
    tls: {
        rejectUnauthorized: false
    }
})

route.post("/order/mail", async (req, res) => {
    const { email,total,product ,Address} = req.body;
    console.log(email);
    let mailOptions = {
        from: "pettishop2022@gmail.com",
        to: `${email}`,
        subject: "Test mail for pettishop",
        html: `<div className="email" style="
      border: 1px solid black;
      padding: 20px;
      font-family: sans-serif;
      line-height: 2;
      font-size: 20px; 
      ">
     <p>Product Name:${product.map((x) => x.name)}</p>
      <p>Total:${total}</p>
    
     
     

  <p>Thank You For Shopping, Shop Again ! </p>
       </div>`
    };

    await transporter.sendMail(mailOptions, function (err, data) {
        if (err) {
            console.log(err);
            res.json({ status: "Email not sent" });
        } else {
            console.log("Email sent successfully");
            res.json({ status: "Email sent" });
        }
    });
})

// CREATE  
route.post("/order", async (req, res) => {
   
    try {
        const newOrder = new Order({
            userid: req.user._id,
            email:req.user.email,
            product: req.body.product,
            Address: req.body.Address,
            total: req.body.total,
        });
        const savedOrder = await newOrder.save();
        res.status(200).json(savedOrder);
    } catch (err) {
        res.status(500).send("error");
    }
});



// Update  
route.put("/order/:id", async (req, res) => {
    try {
        const updatedOrder = await Order.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            { new: true }
        );
        res.status(200).json(updatedOrder);
    } catch (err) {
        res.status(500).json(err);

    }
});



// Delete  
route.delete("/order/:id", async (req, res) => {
    try {
        await Order.findByIdAndDelete(req.params.id);

        res.status(200).json("Order has been Deleted....");
    } catch (err) {
        res.status(500).send({ error: "cannot fetch item by id" });
    }
});


// Get order by USER Id
route.get("/order/find/:userid", async (req, res) => {
    try {
        const orders = await Order.find( {userid:req.user._id} );
        res.status(200).json(orders);
    } catch (err) {
        res.status(500).send({ error: "cannot fetch " });
    }
});


// Get ALL orders  

route.get("/order", async (req, res) => {

    try {

        const orders = await Order.find();
        res.status(200).json(orders);
    }
    catch (err) {
        res.status(500).json(err);
    }
});

// Get order by order id
route.get("/order/:id", async (req, res) => {

    try {

        const orders = await Order.findById(req.params.id);
        res.status(200).json(orders);
    }
    catch (err) {
        res.status(500).json(err);
    }
});




module.exports = route;