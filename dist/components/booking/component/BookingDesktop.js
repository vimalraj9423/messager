'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styles = require('material-ui/styles');

var _colors = require('material-ui/colors');

var _header = require('./header');

var _header2 = _interopRequireDefault(_header);

var _BookingSummary = require('./BookingSummary');

var _BookingSummary2 = _interopRequireDefault(_BookingSummary);

var _SummaryBottom = require('./SummaryBottom');

var _SummaryBottom2 = _interopRequireDefault(_SummaryBottom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
//components


var theme = (0, _styles.createMuiTheme)({
  palette: {
    primary: _colors.green,
    accent: _colors.red,
    type: 'light'
  }
});

var BookingDesktop = function (_Component) {
  _inherits(BookingDesktop, _Component);

  function BookingDesktop(props) {
    _classCallCheck(this, BookingDesktop);

    return _possibleConstructorReturn(this, (BookingDesktop.__proto__ || Object.getPrototypeOf(BookingDesktop)).call(this, props));
  }

  _createClass(BookingDesktop, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _styles.MuiThemeProvider,
        { theme: theme, sheetsManager: new Map() },
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(_header2.default, null),
          _react2.default.createElement(
            'style',
            null,
            'body { background-color: #eeeeee;margin:0px }'
          ),
          _react2.default.createElement(_BookingSummary2.default, { bookingDetails: this.props.bookingDetails }),
          _react2.default.createElement(_SummaryBottom2.default, { price: '15000' })
        )
      );
    }
  }]);

  return BookingDesktop;
}(_react.Component);

exports.default = BookingDesktop;