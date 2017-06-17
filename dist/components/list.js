'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ListItem = function ListItem(_ref) {
  var item = _ref.item;
  return _react2.default.createElement(
    'li',
    null,
    ' ',
    item
  );
};

var List = function List(_ref2) {
  var listData = _ref2.data;
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'ul',
      null,
      listData.map(function (item) {
        return _react2.default.createElement(ListItem, { item: item });
      })
    )
  );
};

exports.default = List;