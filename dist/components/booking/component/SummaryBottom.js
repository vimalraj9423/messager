'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styles = require('material-ui/styles');

var _Grid = require('material-ui/Grid');

var _Grid2 = _interopRequireDefault(_Grid);

var _Form = require('material-ui/Form');

var _Radio = require('material-ui/Radio');

var _Radio2 = _interopRequireDefault(_Radio);

var _Paper = require('material-ui/Paper');

var _Paper2 = _interopRequireDefault(_Paper);

var _bind = require('classnames/bind');

var _bind2 = _interopRequireDefault(_bind);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = function styles(theme) {
  return {
    root: _defineProperty({
      margin: 0

    }, theme.breakpoints.down('sm'), {
      padding: '0px !important',
      width: '100% !important',
      background: '#eeeeee'
    }),
    demo: _defineProperty({}, theme.breakpoints.down('xs'), {
      width: 'auto',
      paddingLeft: '0px !important',
      paddingRight: '0px !important',
      margin: 0
    }),
    paper: _defineProperty({
      height: '100%'
    }, theme.breakpoints.down('xs'), {
      boxShadow: 'none',
      paddingLeft: '0px !important',
      paddingRight: '0px !important'
    }),
    control: {
      padding: theme.spacing.unit * 2
    },
    b: {
      padding: '0% 3% 3% 3%'
    },
    summaryTitle: {
      textAlign: 'center'
    },
    bookSummaryTitle: _defineProperty({
      fontWeight: 'bold',
      textAlign: 'center',
      padding: theme.spacing.unit * 2
    }, theme.breakpoints.down('xs'), {
      background: '#eeeeee',
      paddingTop: 0,
      paddingLeft: 0,
      paddingRight: 0
    }),
    totalPrice: {
      color: '#ffa800',
      fontWeight: 'bold'
    },
    paddWidth: _defineProperty({}, theme.breakpoints.down('xs'), {
      width: 'auto',
      paddingLeft: '0px !important',
      paddingRight: '0px !important',
      paddingBottom: '0px !important'
    })
  };
};

var SummaryBottom = function (_React$Component) {
  _inherits(SummaryBottom, _React$Component);

  function SummaryBottom(props) {
    _classCallCheck(this, SummaryBottom);

    var _this = _possibleConstructorReturn(this, (SummaryBottom.__proto__ || Object.getPrototypeOf(SummaryBottom)).call(this, props));

    _this.state = {
      direction: 'row',
      justify: 'center',
      align: 'center',
      gutter: '16',
      data: null
    };

    _this.state.data = _this.props;
    return _this;
  }

  _createClass(SummaryBottom, [{
    key: 'render',
    value: function render() {
      var classes = this.props.classes;
      var _state = this.state,
          align = _state.align,
          direction = _state.direction,
          justify = _state.justify;

      return _react2.default.createElement(
        _Grid2.default,
        { container: true, className: classes.root },
        _react2.default.createElement(
          _Grid2.default,
          { item: true, xs: 12, className: classes.paddWidth },
          _react2.default.createElement(
            _Grid2.default,
            {
              container: true,
              className: classes.demo,
              align: align,
              direction: direction,
              justify: justify
            },
            _react2.default.createElement(
              _Grid2.default,
              { item: true, md: 8, sm: 10, xs: 12, className: classes.paddWidth },
              _react2.default.createElement(
                _Paper2.default,
                { className: (0, _bind2.default)(classes.paper, classes.b) },
                _react2.default.createElement(
                  'div',
                  { className: classes.bookSummaryTitle },
                  ' ESTIMATE'
                ),
                _react2.default.createElement(
                  'div',
                  { className: classes.totalPrice },
                  ' ',
                  '\u20B9 ',
                  this.state.data.price,
                  '*'
                ),
                _react2.default.createElement(
                  'div',
                  null,
                  ' ',
                  'Price shown includes labour charges only.Parts and consumables may be charged separately . Taxes applicable Final bill may vary'
                )
              )
            )
          )
        )
      );
    }
  }]);

  return SummaryBottom;
}(_react2.default.Component);

exports.default = (0, _styles.withStyles)(styles)(SummaryBottom);