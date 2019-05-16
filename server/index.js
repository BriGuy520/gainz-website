const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();

require('./models/Product');

const orderRoutes = require('./api/routes/orders');
const productRoutes = require('./api/routes/products');

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});

app.use((req, res, next) => {
  res.status(err.status || 500);
  res.json({
    error: {
      message: error.message
    }
  })
});

// bring in the routes files
app.use('/orders', orderRoutes);
app.use('/products', productRoutes);


const PORT = process.env.PORT || 8080;

app.listen(PORT, console.log('app is listening on PORT:' + PORT));
