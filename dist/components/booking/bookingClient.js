'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactTapEventPlugin = require('react-tap-event-plugin');

var _reactTapEventPlugin2 = _interopRequireDefault(_reactTapEventPlugin);

var _BookingDesktop = require('./component/BookingDesktop');

var _BookingDesktop2 = _interopRequireDefault(_BookingDesktop);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _reactTapEventPlugin2.default)();
(0, _reactDom.render)(_react2.default.createElement(_BookingDesktop2.default, null), document.getElementById('root'));