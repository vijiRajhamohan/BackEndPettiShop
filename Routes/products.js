const route = require("express").Router();
const item = require("../Models/productSchema");
const cloudinary = require("../Models/cloudinary");

// CREATE

route.post("/products", async (req, res) => {
  const { image, name, category, quantity, price } = req.body;

  try {
    if (image) {
      const uploadedResponse = await cloudinary.uploader.upload(image, {
        upload_preset: "petti_shop",
      });

      if (uploadedResponse) {
        const product = new item({
          image: uploadedResponse,
          name,
          category,
          quantity,
          price,
        });

        const savedProduct = await product.save();
        res.status(200).send(savedProduct);
      }
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
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
    const data = await item.findById(req.params.id);
    res.status(200).json(data);
  } catch (err) {
    res.status(500).send({ error: "cannot fetch product by id" });
  }
});

// Update
route.put("/productsDetails/:id", async (req, res) => {
  try {
    if (req.body.image) {
       req.body.image = await cloudinary.uploader.upload(req.body.image, {
        upload_preset: "petti_shop",
      });

      const updatedProduct = await item.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },

        { new: true }
      );
      res.status(200).json(updatedProduct);
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// Delete
route.delete("/productsDetails/:id", async (req, res) => {
  try {
    await item.findByIdAndDelete(req.params.id);

    res.status(200).json("Product has been Deleted....");
  } catch (err) {
    res.status(500).send({ error: "cannot fetch product by id" });
  }
});

module.exports = route;
