"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactTapEventPlugin = require("react-tap-event-plugin");

var _reactTapEventPlugin2 = _interopRequireDefault(_reactTapEventPlugin);

var _List = require("material-ui/List");

var _MuiThemeProvider = require("material-ui/styles/MuiThemeProvider");

var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _reactTapEventPlugin2.default)();

var ListItems = function ListItems(_ref) {
  var item = _ref.item;
  return _react2.default.createElement(_List.ListItem, { primaryText: item });
};

var ListComp = function ListComp(_ref2) {
  var listData = _ref2.data;
  return _react2.default.createElement(
    _MuiThemeProvider2.default,
    null,
    _react2.default.createElement(
      _List.List,
      null,
      listData.map(function (item) {
        return _react2.default.createElement(ListItems, { key: item, item: item });
      })
    )
  );
};

exports.default = ListComp;