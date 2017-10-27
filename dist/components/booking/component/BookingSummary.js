'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

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

var _compose = require('recompose/compose');

var _compose2 = _interopRequireDefault(_compose);

var _withWidth = require('material-ui/utils/withWidth');

var _withWidth2 = _interopRequireDefault(_withWidth);

var _colors = require('material-ui/colors');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = function styles(theme) {
  var _summaryDescription, _theme$breakpoints$do;

  return {
    paddWidth: _defineProperty({}, theme.breakpoints.down('xs'), {
      width: 'auto',
      paddingLeft: '0px !important',
      paddingRight: '0px !important'
    }),
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
      boxShadow: 'none'
    }),
    control: {
      padding: theme.spacing.unit * 2
    },
    b: _defineProperty({
      padding: '2% 3%'
    }, theme.breakpoints.down('xs'), {
      paddingLeft: 0,
      paddingRight: 0,
      background: '#eeeeee'
    }),
    summaryTitle: _defineProperty({
      textAlign: 'center'
    }, theme.breakpoints.down('xs'), {
      background: '#eeeeee'
    }),
    bookSummaryTitle: _defineProperty({
      fontWeight: 'bold',
      textAlign: 'center',
      padding: theme.spacing.unit * 2
    }, theme.breakpoints.down('xs'), {
      background: '#eeeeee'
    }),
    summaryDescription: (_summaryDescription = {
      paddingLeft: 106
    }, _defineProperty(_summaryDescription, theme.breakpoints.down('md'), {
      paddingLeft: 6
    }), _defineProperty(_summaryDescription, theme.breakpoints.down('xs'), {
      paddingLeft: 0
    }), _summaryDescription),
    gridDescription: _defineProperty({}, theme.breakpoints.down('xs'), (_theme$breakpoints$do = {
      maxWidth: 'max-content',
      paddingRight: '13px !important',
      paddingTop: '0px !important'
    }, _defineProperty(_theme$breakpoints$do, 'paddingTop', '4px !important'), _defineProperty(_theme$breakpoints$do, 'paddingBottom', '4px !important'), _defineProperty(_theme$breakpoints$do, 'paddingRight', '13px !important'), _theme$breakpoints$do)),
    gridBookingDetails: _defineProperty({
      paddingLeft: 34
    }, theme.breakpoints.down('xs'), {
      maxWidth: 'max-content',
      paddingLeft: '2px !important',
      fontSize: 15,
      paddingTop: '4px !important',
      paddingBottom: '4px !important',
      paddingRight: '13px !important'
    })
  };
};
var FloatLeft = { float: 'right' };
var SemiColon = function SemiColon() {
  return _react2.default.createElement(
    'span',
    { style: FloatLeft },
    ':'
  );
};

var paddingPriceTag = {
  paddingLeft: 34
};
var summaryPriceContentbg = {
  background: 'white',
  width: '100% !important',
  paddingLeft: '0px !important',
  paddingRight: '0px !important',
  margin: 0
};

var PriceTag = function (_React$Component) {
  _inherits(PriceTag, _React$Component);

  function PriceTag(props) {
    _classCallCheck(this, PriceTag);

    var _this = _possibleConstructorReturn(this, (PriceTag.__proto__ || Object.getPrototypeOf(PriceTag)).call(this, props));

    _this.state = props;
    return _this;
  }

  _createClass(PriceTag, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var PriceSummary = {};
      return _react2.default.createElement(
        'div',
        null,
        this.state.PriceTag.map(function (text, index) {
          return _react2.default.createElement(
            _Grid2.default,
            {
              container: true,
              spacing: 24,
              key: index,
              style: summaryPriceContentbg
            },
            _react2.default.createElement(
              _Grid2.default,
              {
                item: true,
                xs: 6,
                sm: 6,
                style: paddingPriceTag,
                className: _this2.props.classes.gridDescription
              },
              _react2.default.createElement(
                'b',
                null,
                ' ',
                _react2.default.createElement(
                  'span',
                  { className: _this2.props.classes.summaryDescription },
                  ' ',
                  text.description,
                  ' '
                )
              ),
              _react2.default.createElement(SemiColon, null)
            ),
            _react2.default.createElement(
              _Grid2.default,
              {
                item: true,
                xs: 6,
                sm: 6,
                className: _this2.props.classes.gridBookingDetails
              },
              text.value
            )
          );
        })
      );
    }
  }]);

  return PriceTag;
}(_react2.default.Component);

var BookingSummary = function (_React$Component2) {
  _inherits(BookingSummary, _React$Component2);

  function BookingSummary(props) {
    _classCallCheck(this, BookingSummary);

    var _this3 = _possibleConstructorReturn(this, (BookingSummary.__proto__ || Object.getPrototypeOf(BookingSummary)).call(this, props));

    _this3.state = {
      direction: 'row',
      justify: 'center',
      align: 'center',
      gutter: '16'
    };

    _this3.state.bookingDetails = _this3.props.bookingDetails;
    return _this3;
  }

  _createClass(BookingSummary, [{
    key: 'bookSummary',
    value: function bookSummary() {
      return [{
        description: 'Service Provider',
        value: 'Vishnu AutoMobiles'
      }, {
        description: 'Service Type',
        value: 'General Serivice'
      }, {
        description: 'Booking ID',
        value: '12345'
      }, {
        description: ' Vechicle',
        value: 'Maruti Alto'
      }, {
        description: ' Service Date',
        value: '08 May, 2017'
      }, {
        description: 'Registration No',
        value: 'TN/06/L/1245'
      }];
    }
  }, {
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
                  { className: classes.summaryTitle },
                  ' ',
                  'Hola! Your booking has been confirmed'
                ),
                _react2.default.createElement(
                  'div',
                  { className: classes.summaryTitle },
                  'Track Your service with our Real Time Tracking.'
                ),
                _react2.default.createElement(
                  'div',
                  { className: classes.bookSummaryTitle },
                  ' Booking Summary'
                ),
                _react2.default.createElement(
                  'div',
                  { className: classes.divSummary },
                  _react2.default.createElement(PriceTag, {
                    PriceTag: this.state.bookingDetails,
                    classes: this.props.classes
                  })
                )
              )
            )
          )
        )
      );
    }
  }]);

  return BookingSummary;
}(_react2.default.Component);

BookingSummary.propTypes = {
  classes: _propTypes2.default.object.isRequired
};

exports.default = (0, _styles.withStyles)(styles)(BookingSummary);