"use strict";

var dotenv = require('dotenv').config();

module.exports = {
  PORT: process.env.PORT,
  SECRET_TOKEN: process.env.SECRET_TOKEN
};