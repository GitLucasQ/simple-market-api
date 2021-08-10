"use strict";

var _express = _interopRequireDefault(require("express"));

var _products = _interopRequireDefault(require("./routes/products.routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var config = require('./config');

var cors = require('cors');

// VARIABLES CONFIG
var app = (0, _express["default"])();
var port = config.PORT; // USES

app.use(cors()); // ROUTES

app.get('/', function (req, res) {
  res.send('Its works!!');
});
app.use(_products["default"]);
app.listen(port, function () {
  console.log("Server listen on port ".concat(port));
});