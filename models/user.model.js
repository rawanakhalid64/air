const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");

const userSchema = new Schema({
email: { type: String, required: true, trim: true },
password: { type: String, required: true, trim: true },
fname: { type: String, required: true, trim: true },
lname: { type: String, required: true, trim: true },
});

userSchema.pre("save", async function(next) {
const user = this;
if (!user.isModified("password")) return next();
const hashedPassword = await bcrypt.hash(user.password,8);
user.password = hashedPassword;
next();
});

const User = mongoose.model("User", userSchema);
module.exports = User;