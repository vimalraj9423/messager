'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HomeSSRDesktop = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = require('material-ui/styles');

var _colors = require('material-ui/colors');

var _mobile = require('./mobile');

var _mobile2 = _interopRequireDefault(_mobile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import createStyleManager from '../Theme/ThemeStyles'


var theme = (0, _styles.createMuiTheme)({
  typography: {
    headline: {
      paddingTop: '12px',
      paddingBottom: '12px',
      fontFamily: '"Roboto", sans-serif'
    },
    body: {
      paddingBottom: '12px',
      backgroundcolor: 'green'
    },
    h1: {
      fontFamily: '"Roboto", sans-serif'
    },
    h2: {
      fontFamily: '"Roboto", sans-serif'
    }
  },
  MuiDrawer: {
    anchorTop: {
      overflow: 'inherit'
    }
  },
  MuiPaper: {},
  MuiInput: {
    inkbar: {
      '&:after': {
        left: 0,
        right: 0,
        bottom: 0,
        height: '2px',
        content: '',
        position: 'absolute',
        transform: 'scaleX(0)',
        transition: 'transform 200ms cubic-bezier(0.0, 0.0, 0.2, 1) 0ms',
        backgroundcolor: '#ffa800'
      }
    },
    focused: {
      transform: 'scaleX(1)'
    }
  },
  palette: {
    primary: _colors.orange,
    type: 'light',
    accent: _colors.orange,
    secondary: _colors.orange
  }
});

var HomeSSRDesktop = exports.HomeSSRDesktop = function (_Component) {
  _inherits(HomeSSRDesktop, _Component);

  function HomeSSRDesktop() {
    _classCallCheck(this, HomeSSRDesktop);

    return _possibleConstructorReturn(this, (HomeSSRDesktop.__proto__ || Object.getPrototypeOf(HomeSSRDesktop)).apply(this, arguments));
  }

  _createClass(HomeSSRDesktop, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _styles.MuiThemeProvider,
        { theme: theme, sheetsManager: new Map() },
        _react2.default.createElement(_mobile2.default, null)
      );
    }
  }]);

  return HomeSSRDesktop;
}(_react.Component);

exports.default = HomeSSRDesktop;
// export const HomeCssDesktop = styleManager