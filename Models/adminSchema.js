const mongoose = require("mongoose");

const adminschema = new mongoose.Schema({
    name: { type: String, requried: true },
    email: { type: String, requried: true, unique: true },
    password: { type: String, requried: true },
    mobile: { type: String, requried: true },
     role: { type: String }
},
    { timestamps: true }
);

module.exports = mongoose.model("admin", adminschema);