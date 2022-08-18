
const mongoose = require("mongoose");

const orderSchema =new mongoose.Schema(
  {
    userId: { type: String, requried: true },
    // token: { type: String, requried: true },
   product: { type: Array, requried: true },
    Address: { type: String, requried: true },
    total: { type: String, requried: true },
    
     status:{ type:String, default:"Delivered"}
  },
  { timestamps: true }
);

module.exports = mongoose.model("order", orderSchema);
