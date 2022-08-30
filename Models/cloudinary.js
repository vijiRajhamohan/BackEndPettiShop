const cloudinaryModule = require("cloudinary");
const cloudinary = cloudinaryModule.v2;
require("dotenv").config();
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_APIKEY,
    api_secret: process.env.CLOUD_APISECRET
});

module.exports = cloudinary;