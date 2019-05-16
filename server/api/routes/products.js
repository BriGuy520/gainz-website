const express = require("express");
const router = express.Router();

router.get('/', (req, res, next) => {
  res.status(200).json({
    message: 'This is the products route'
  });
});

router.post('/:productId', (req, res, next) => {
  res.status(200).json({
    message: 'This a new product to post'
  });
});



module.exports = router;