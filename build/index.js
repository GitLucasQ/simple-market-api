"use strict";

var _express = _interopRequireDefault(require("express"));

var _products = _interopRequireDefault(require("./routes/products.routes"));

var _auth = _interopRequireDefault(require("./routes/auth.routes"));

require("./database");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var config = require('./config');

var cors = require('cors');

// VARIABLES CONFIG
var app = (0, _express["default"])();
var port = config.PORT; // USES

app.use(cors());
app.use(_express["default"].json()); // ROUTES

app.use("/products", _products["default"]);
app.use('/auth', _auth["default"]);
app.listen(port, function () {
  console.log("Server listen on port ".concat(port));
});
module.exports = app;