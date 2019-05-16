const mongoose = require('mongoose');
const { Schema } = mongoose;


const productSchema = new Schema({
  name: String, 
  size: String,
  pictures: [String],
  description: String, 
  price: Number,
  category: String
});

mongoose.model("Product", productSchema);