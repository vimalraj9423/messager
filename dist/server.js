"use strict";

var _path = require("path");

var _path2 = _interopRequireDefault(_path);

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _app = require("./app");

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PORT = 4000;

_app2.default.use("/assets", _express2.default.static(_path2.default.join(__dirname, "/assets")));

_app2.default.listen(PORT);

console.log("Server started @" + PORT);