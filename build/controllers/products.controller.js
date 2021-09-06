"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCategories = exports.deleteProduct = exports.updateProduct = exports.createProduct = exports.getProductByCategory = exports.getProductById = exports.getAllProducts = void 0;

var _Product = _interopRequireDefault(require("../models/Product"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var getAllProducts = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var listOfProducts;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _Product["default"].find();

          case 2:
            listOfProducts = _context.sent;
            res.status(200).json(listOfProducts);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getAllProducts(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.getAllProducts = getAllProducts;

var getProductById = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var findedProduct;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _Product["default"].findById(req.params.productId);

          case 2:
            findedProduct = _context2.sent;
            res.json(findedProduct);

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getProductById(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getProductById = getProductById;

var getProductByCategory = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var findedProducts;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return _Product["default"].find({
              'category': req.params.category
            });

          case 2:
            findedProducts = _context3.sent;
            res.json(findedProducts);

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function getProductByCategory(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.getProductByCategory = getProductByCategory;

var createProduct = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var _req$body, name, price, category, brand, stock, imgUrl, createdProduct;

    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _req$body = req.body, name = _req$body.name, price = _req$body.price, category = _req$body.category, brand = _req$body.brand, stock = _req$body.stock, imgUrl = _req$body.imgUrl;
            _context4.next = 3;
            return new _Product["default"]({
              name: name,
              price: price,
              category: category,
              brand: brand,
              stock: stock,
              imgUrl: imgUrl
            }).save();

          case 3:
            createdProduct = _context4.sent;
            res.status(201).json(createdProduct);

          case 5:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function createProduct(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.createProduct = createProduct;

var updateProduct = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    var updatedProduct;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return _Product["default"].findByIdAndUpdate(req.params.productId, req.body, {
              "new": true
            });

          case 2:
            updatedProduct = _context5.sent;
            res.status(200).json(updatedProduct);

          case 4:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function updateProduct(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.updateProduct = updateProduct;

var deleteProduct = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(req, res) {
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return _Product["default"].findByIdAndDelete(req.params.productId);

          case 2:
            res.status(204).json('product deleted');

          case 3:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function deleteProduct(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();

exports.deleteProduct = deleteProduct;

var getCategories = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(req, res) {
    var categories;
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.next = 2;
            return _Product["default"].distinct('category');

          case 2:
            categories = _context7.sent;
            res.status(200).json(categories);

          case 4:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));

  return function getCategories(_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}();

exports.getCategories = getCategories;