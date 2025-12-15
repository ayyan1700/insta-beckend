const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true, minlength: 5, maxlength: 20, lowercase: true, trim: true },
  email: { type: String, required: true, unique: true, lowercase: true, trim: true, validate: v => validator.isEmail(v) },
  age: { type: Number, required: true, min: 18, max: 50 },
  avatar: { type: String, default: "", trim: true }
}, { timestamps: true });

module.exports = mongoose.model("insta", userSchema, "insta-user"); // last param = collection name
