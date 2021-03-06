const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.status(200).json({
    message: "get current orders"
  });
});

router.post('/:orderId', (req, res, next) => {
  res.status(200).json({
    message: 'post a new order'
  });
});

router.patch('/:orderId', (req, res, next) => {
  res.status(200).json({
    message: "Congrats your order has been updated"
  });
});

module.exports = router;
