'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

var _jss = require('react-jss/lib/jss');

var _JssProvider = require('react-jss/lib/JssProvider');

var _JssProvider2 = _interopRequireDefault(_JssProvider);

var _jss2 = require('jss');

var _jssPresetDefault = require('jss-preset-default');

var _jssPresetDefault2 = _interopRequireDefault(_jssPresetDefault);

var _styles = require('material-ui/styles');

var _createGenerateClassName = require('material-ui/styles/createGenerateClassName');

var _createGenerateClassName2 = _interopRequireDefault(_createGenerateClassName);

var _colors = require('material-ui/colors');

var _Checkbox = require('material-ui/Checkbox');

var _Checkbox2 = _interopRequireDefault(_Checkbox);

var _main = require('./main');

var _main2 = _interopRequireDefault(_main);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var homeRouter = _express2.default.Router();

function handleHomeRoute(req, res) {
  var sheetsRegistry = new _jss.SheetsRegistry();

  // Create a theme instance.
  var theme = (0, _styles.createMuiTheme)({
    palette: {
      primary: _colors.green,
      accent: _colors.red,
      type: 'light'
    },
    status: {
      // My business variables
      danger: _colors.orange[500]
    },
    body: {
      background: _colors.green
    },
    typography: {
      body1: {
        background: _colors.orange[500]
      },
      body2: {
        background: _colors.orange[500]
      }
    }
  });

  // Configure JSS
  var jss = (0, _jss2.create)((0, _jssPresetDefault2.default)());
  jss.options.createGenerateClassName = _createGenerateClassName2.default;

  // Render the component to a string.
  var html = (0, _server.renderToString)(_react2.default.createElement(
    _JssProvider2.default,
    { registry: sheetsRegistry, jss: jss },
    _react2.default.createElement(
      _styles.MuiThemeProvider,
      { theme: theme, sheetsManager: new Map() },
      _react2.default.createElement(_main2.default, null)
    )
  ));

  // Grab the CSS from our sheetsRegistry.
  var css = sheetsRegistry.toString();

  // Send the rendered page back to the client.
  res.send(renderFullPage(html, css));
}

homeRouter.get('/', handleHomeRoute);

exports.default = homeRouter;


function renderFullPage(html, css) {
  return '\n    <!doctype html>\n    <html>\n      <head>\n        <title>Material-UI</title>\n      </head>\n      <body>\n        <div id="root">' + html + '</div>\n        <style id="jss-server-side">' + css + '</style>\n      </body>\n    </html>\n  ';
}