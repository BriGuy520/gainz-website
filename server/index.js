const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();


const PORT = process.env.PORT || 8080;

app.listen(PORT, console.log('app is listening on PORT:' + PORT));
