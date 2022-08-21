const route = require("express").Router();
const item = require("../Models/productSchema");
const { ObjectId } = require("mongodb");

// CREATE  (verifyTokenAndAdmin)
route.post("/products", async (req, res) => {
  try {
    const data = new item({
      image: req.body.image,
      category: req.body.category,
      name: req.body.name,
      quantity: req.body.quantity,
      price: req.body.price,
    });
    const product = await data.save();
    res.status(200).json(product);
  } catch (err) {
    res.status(500).send("error");
  }
});

// Get ALL Products
route.get("/productsList", async (req, res) => {
  const qNew = req.query.new;
  const qCategory = req.query.category;
  try {
    let products;
    if (qNew) {
      products = await item.find().sort({ createdAt: -1 }).limit(5);
    } else if (qCategory) {
      products = await item.find({
        category: {
          $in: [qCategory],
        },
      });
    } else {
      products = await item.find();
    }
    res.status(200).json(products);
  } catch (err) {
    res.status(500).send("error");
  }
});

route.get("/productsLists", async (req, res) => {
  try {
    const data = await item.find();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).send({ error: "cannot fetch products" });
  }
});

// Get Product By Id
route.get("/productsLists/:id", async (req, res) => {
  try {
    const data = await item.findOne({ _id: ObjectId(req.params.id) });
    res.status(200).json(data);
  } catch (err) {
    res.status(500).send({ error: "cannot fetch product by id" });
  }
});

// Update  (verifyTokenAndAdmin)
route.put("/productsDetails/:id", async (req, res) => {
  try {
    const updatedProduct = await item.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedProduct);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Delete  (verifyTokenAndAdmin)
route.delete("/productsDetails/:id", async (req, res) => {
  try {
    await item.findByIdAndDelete(req.params.id);

    res.status(200).json("Product has been Deleted....");
  } catch (err) {
    res.status(500).send({ error: "cannot fetch product by id" });
  }
});

// Search
route.get("/productsList/search/:key", async (req, res) => {
  try {
    const result = await item.find({
      $or: [
        { name: { $regex: req.params.key } },
        // {category:{$regex:req.params.key}}
      ],
    });
    res.status(200).json(result);
  } catch (err) {
    res.status(500).send({ error: "cannot fetch product by id" });
  }
});

module.exports = route;
