"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _mongoose = _interopRequireDefault(require("mongoose"));

var _config = require("./config");

_mongoose["default"].connect(_config.URL_DATABASE, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
}).then(function (db) {
  return console.log('DB connection succesfully');
})["catch"](function (err) {
  console.log(err);
});
//# sourceMappingURL=database.js.map