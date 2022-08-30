const mongoose = require("mongoose");

const productSchema =new mongoose.Schema({
  image: { type: Object, requried: true },
  category: { type: String, requried: true },
  name: { type: String, requried: true },
  quantity: { type: String, requried: true },
  price: { type: String, requried: true },
},
{timestamps:true}
);


module.exports = mongoose.model("products", productSchema);