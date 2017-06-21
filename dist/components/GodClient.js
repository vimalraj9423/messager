"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _GodsContainer = require("./GodsContainer");

var _GodsContainer2 = _interopRequireDefault(_GodsContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _reactDom.render)(_react2.default.createElement(_GodsContainer2.default, { gods: window.__APP_INITIAL_STATE__ }), document.getElementById("root"));