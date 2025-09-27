const mongoose = require("mongoose");

const humanSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  description: { type: String, required: true},
  image: { type: String }
}, { timestamps: true });

module.exports = mongoose.model("Humans", humanSchema);