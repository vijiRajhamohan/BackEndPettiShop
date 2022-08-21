
const mongoose = require("mongoose");
 
const registerSchema = new mongoose.Schema({
  name: { type: String, requried: true },
  email: { type: String, requried: true,unique:true },
  password: { type: String, requried: true },
  isAdmin:{
    type:Boolean,
    default:false,
  },
  mobile: { type: String, requried: true },
  address: { type: Object, requried: true },
  pincode: { type: String, requried: true },
},
{timestamps:true}
);

module.exports = mongoose.model("register", registerSchema);