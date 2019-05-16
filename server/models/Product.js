const mongoose = require('mongoose');
const { Schema } = mongoose;


const productSchema = new Schema({
  name: String, 
  size: String,
  images: [String],
  description: String, 
  price: Number,
  category: String
});

mongoose.model("Product", productSchema);