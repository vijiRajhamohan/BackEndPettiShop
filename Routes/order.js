const route = require("express").Router();
const Order = require("../Models/orderSchema");





// CREATE  
route.post("/order", async (req, res) => {
    const newOrder = new Order(req.body);
    try {
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
route.get("/order/find/:userId", async (req, res) => {
    try {
        const orders = await Order.find({ userId: req.params.userId });
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

// Get order by id
route.get("/order/:id", async (req, res) => {

    try {

        const orders = await Order.findById(req.params.id);
        res.status(200).json(orders);
    }
    catch (err) {
        res.status(500).json(err);
    }
});

// GET MONTLY INCOME (verifyTokenAndAdmin)

route.get("/order/income", async (req, res) => {
    const date = new Date();
    const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
    const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));

    try {
        const income = await Order.aggregate([
            { $match: { createdAt: { $gte: previousMonth } } },
            {
                $project: {
                    month: { $month: "$createdAt" },
                    sales: "$amount",
                },
            },
            {
                $group: {
                    _id: "$month",
                    total: { $sum: "$sales" },
                },
            },
        ]);
        res.status(200).json(income);
    } catch (err) {
        res.status(500).json(err);
    }
});


module.exports = route;