"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createToken = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _config = _interopRequireDefault(require("../config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var createToken = function createToken(idUser) {
  var generatedToken = _jsonwebtoken["default"].sign({
    id: idUser
  }, _config["default"].SECRET_TOKEN, {
    expiresIn: 60 * 60 * 24
  });

  return generatedToken;
};

exports.createToken = createToken;