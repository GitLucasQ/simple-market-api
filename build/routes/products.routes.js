"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var router = (0, _express.Router)();
router.get('allProducts', function (req, res) {
  res.json({
    status: "200",
    message: "list of products"
  });
});
var _default = router;
exports["default"] = _default;