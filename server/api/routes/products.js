const express = require("express");
const mongoose = require('mongoose');
const router = express.Router();

const Product = mongoose.model("Product");

router.get('/', (req, res, next) => {
  res.status(200).json({
    message: 'This is the products route'
  });
});

router.post('/', (req, res, next) => {
  const { name, size, description, price, category } = req.body;
  const product = new Product({
    name,
    size,
    description,
    price,
    category
  });

  product.save();
  res.send(product);  

});



module.exports = router;