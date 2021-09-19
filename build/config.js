"use strict";

var dotenv = require('dotenv').config();

module.exports = {
  PORT: process.env.PORT,
  SECRET_TOKEN: process.env.SECRET_TOKEN,
  URL_DATABASE: process.env.URL_DATABASE
};