const  route = require ("express").Router();
const item = require("../Models/productSchema");
const { ObjectId } = require ("mongodb")
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("./verifyToken");




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
      products = await item.find().sort({ createdAt: -1 }).limit(5)
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
  }
  catch (err) {
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

// // // filter by Category

// route.get("/productsList/Grocery", async (req, res) => {
//   try {
//     const data = await item.find({ category: "Grocery" });
//     console.log(data)
//     res.status(200).json(data);

//   } catch (err) {
//     res.status(500).send({ error: "cannot fetch products" });
//   }
// });

// route.get("/productsList/IceCream", async (req, res) => {
//   try {
//     const data = await item.find({category:"IceCream"});
//     console.log(data)
//     res.status(200).json(data);
  
//   } catch (err) {
//     res.status(500).send({ error: "cannot fetch products" });
//   }
// });

// route.get("/productsList/HomeMade", async (req, res) => {
//   try {
//     const data = await item.find({ category: "HomeMade" });
//     console.log(data)
//     res.status(200).json(data);

//   } catch (err) {
//     res.status(500).send({ error: "cannot fetch products" });
//   }
// });

// route.get("/productsList/HealthDrinks", async (req, res) => {
//   try {
//     const data = await item.find({ category: "HealthDrinks" });
//     console.log(data)
//     res.status(200).json(data);

//   } catch (err) {
//     res.status(500).send({ error: "cannot fetch products" });
//   }
// });

// route.get("/productsList/Chocolates", async (req, res) => {
//   try {
//     const data = await item.find({ category: "Chocolates" });
//     console.log(data)
//     res.status(200).json(data);

//   } catch (err) {
//     res.status(500).send({ error: "cannot fetch products" });
//   }
// });

// route.get("/productsList/PersonalCare", async (req, res) => {
//   try {
//     const data = await item.find({ category: "PersonalCare" });
//     console.log(data)
//     res.status(200).json(data);

//   } catch (err) {
//     res.status(500).send({ error: "cannot fetch products" });
//   }
// });

// route.get("/productsList/PoojaItems", async (req, res) => {
//   try {
//     const data = await item.find({ category: "PoojaItems" });
//     console.log(data)
//     res.status(200).json(data);

//   } catch (err) {
//     res.status(500).send({ error: "cannot fetch products" });
//   }
// });

// route.get("/productsList/Nostalgia", async (req, res) => {
//   try {
//     const data = await item.find({ category: "Nostalgia" });
//     console.log(data)
//     res.status(200).json(data);

//   } catch (err) {
//     res.status(500).send({ error: "cannot fetch products" });
//   }
// });




 
// Get Product By Id
route.get("/productsLists/:id", async (req, res) => {
  try {
    const data = await item.findOne({_id: ObjectId(req.params.id)});
    res.status(200).json(data);
  } catch (err) {
    res.status(500).send({error:"cannot fetch product by id"});
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
      "$or":[
        {name:{$regex:req.params.key}}
        // {category:{$regex:req.params.key}}
      ]
     });
    res.status(200).json(result);
  } catch (err) {
    res.status(500).send({ error: "cannot fetch product by id" });
  }
});


module.exports=route;