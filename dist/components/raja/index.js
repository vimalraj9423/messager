'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactTapEventPlugin = require('react-tap-event-plugin');

var _reactTapEventPlugin2 = _interopRequireDefault(_reactTapEventPlugin);

var _HOMESSR = require('./HOMESSR');

var _HOMESSR2 = _interopRequireDefault(_HOMESSR);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _reactTapEventPlugin2.default)();

(0, _reactDom.render)(_react2.default.createElement(_HOMESSR2.default, window.__APP_INITIAL_STATE__), document.getElementById('root'));