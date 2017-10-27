'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _routes = require('../components/raja/routes.js');

var _routes2 = _interopRequireDefault(_routes);

var _routes3 = require('../components/booking/routes');

var _routes4 = _interopRequireDefault(_routes3);

var _routes5 = require('../components/chatbot/routes');

var _routes6 = _interopRequireDefault(_routes5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));
app.use(_routes2.default);
app.use(_routes4.default);
app.use(_routes6.default);
exports.default = app;