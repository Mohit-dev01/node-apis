const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: [true, "Price must be provided"],
  },
  featured: {
    type: Boolean,
    defaultValue: false,
  },
  rating: {
    type: Number,
    defaultValue: 4.7,
  },
  createdAt: {
    type: Date,
    defaultValue: Date.now(),
  },
  company: {
    type: String,
    enum: {
      values: ["apple", "samsung", "mi", "dell"],
      message: `{VALUE} is not supported`,
    },
  },
});

module.exports = mongoose.model("Product", productSchema);
