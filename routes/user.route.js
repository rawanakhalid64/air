const express = require("express");
const router = express.Router();
const User = require("../models/user.model");
const bcrypt = require("bcrypt");

router.post("/register", async (req, res) => {
  try {
    let dublicated =await User.findOne({ email:req.body.email})
    console.log(dublicated);
    if(dublicated) return res.status(409).send({message:"email is alredy taken"})
    let user = new User(req.body);
    await user.save();
    res.send({ message: "Account created !!" });
  } catch (error) {
    res.send({ messasge: error.message });
  }
});

router.post("/login", async (req, res) => {
  try {
    // console.log(req.body);
    let user = await User.findOne({ email: req.body.email });
    if (!user)
      return res
        .status(404)
        .send({ messasge: "Email not found! Please try again" });
    let validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword)
      return res.status(404).send({ messasge: "Invalid password !!" });
    res.send({ messasge: "Login successfully" });
  } catch (error) {
    res.send({ messasge: error.message });
  }
});

module.exports = router;
