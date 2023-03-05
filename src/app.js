const compression = require('compression');
const express = require('express');
const { default: helmet } = require('helmet');
const morgan = require('morgan');
const app = express();

// Init middleware
app.use(morgan('dev'));
app.use(helmet());
app.use(compression());

// Init Database

// Init Routes
app.get('/', (req, res, next) => {
  return res.status(200).json({ message: 'Welcome ' });
});

// Handle Error

module.exports = app;
