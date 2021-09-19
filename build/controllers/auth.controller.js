"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.signUp = exports.signIn = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _User = _interopRequireDefault(require("../models/User"));

var Token = _interopRequireWildcard(require("../utils/Token"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var signIn = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var userFounded, isPasswordCorrect, token;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _User["default"].findOne({
              email: req.body.email
            });

          case 2:
            userFounded = _context.sent;

            if (userFounded) {
              _context.next = 5;
              break;
            }

            return _context.abrupt("return", res.status(400).json('user not found'));

          case 5:
            _context.next = 7;
            return _User["default"].validatePassword(req.body.password, userFounded.password);

          case 7:
            isPasswordCorrect = _context.sent;

            if (isPasswordCorrect) {
              _context.next = 10;
              break;
            }

            return _context.abrupt("return", res.status(401).json('password incorrect'));

          case 10:
            token = Token.createToken(userFounded._id);
            res.json({
              token: token
            });

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function signIn(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.signIn = signIn;

var signUp = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var _req$body, firstName, lastName, email, password, userFounded, createdUser, token;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _req$body = req.body, firstName = _req$body.firstName, lastName = _req$body.lastName, email = _req$body.email, password = _req$body.password;
            _context2.next = 3;
            return _User["default"].findOne({
              email: email
            });

          case 3:
            userFounded = _context2.sent;

            if (!userFounded) {
              _context2.next = 8;
              break;
            }

            res.json('user already exists');
            _context2.next = 21;
            break;

          case 8:
            _context2.t0 = _User["default"];
            _context2.t1 = firstName;
            _context2.t2 = lastName;
            _context2.t3 = email;
            _context2.next = 14;
            return _User["default"].encryptPassword(password);

          case 14:
            _context2.t4 = _context2.sent;
            _context2.t5 = {
              firstName: _context2.t1,
              lastName: _context2.t2,
              email: _context2.t3,
              password: _context2.t4
            };
            createdUser = new _context2.t0(_context2.t5);
            _context2.next = 19;
            return createdUser.save();

          case 19:
            token = Token.createToken(createdUser._id);
            res.json({
              token: token
            });

          case 21:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function signUp(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.signUp = signUp;