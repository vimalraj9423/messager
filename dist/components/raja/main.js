'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Button = require('material-ui/Button');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Main = function Main() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(ButtonAppBar, null),
    _react2.default.createElement(
      _Button2.default,
      null,
      'Hello world'
    )
  );
};

exports.default = Main;