const jwt = require("jsonwebtoken");
const adb = require("../Models/adminSchema");
const udb = require("../Models/registerschema");
async function TokenVerification(req, res, next) {
  req.user = null;
  try {
    if (req.headers && req.headers.authorization) {
      const [_, token] = req.headers.authorization.split(" ");
      const user = await jwt.verify(token, process.env.PASS_SEC);

      if (user.role === "admin") {
        const admin = await adb.findOne({ email: user.email });
        if (admin) {
          console.log("admin");
          req.user = user;
          next();
        }
      } else if (user.role === "user") {
        const users = await udb.findOne({ email: user.email });
        if (users) {
          req.user = users;
          next();
        }
      } else {
        throw new Error("User doesn't exists");
      }
    } else {
      res.status(403).send("log in");
    }
  } catch (err) {
    res.status(403).send(err.message);
  }
}

module.exports = TokenVerification;
