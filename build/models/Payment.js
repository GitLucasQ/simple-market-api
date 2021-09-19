"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var paymentSchema = new _mongoose.Schema({
  userId: String,
  userEmail: String,
  productsList: [{
    productId: String,
    productName: String,
    quantity: Number,
    total: Number
  }],
  paymentMethod: String,
  grandTotal: Number
}, {
  timestamps: true,
  versionKey: false
});

var _default = (0, _mongoose.model)('Payment', paymentSchema);

exports["default"] = _default;
//# sourceMappingURL=Payment.js.map