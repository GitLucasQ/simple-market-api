"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var productSchema = new _mongoose.Schema({
  name: String,
  price: Number,
  category: String,
  subCategory: String,
  stock: Number,
  imgUrl: String
}, {
  timestamps: true,
  versionKey: false
});

var _default = (0, _mongoose.model)('Product', productSchema);

exports["default"] = _default;