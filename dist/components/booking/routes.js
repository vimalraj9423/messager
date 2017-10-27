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

var _template = require('./template');

var _template2 = _interopRequireDefault(_template);

var _BookingDesktop = require('./component/BookingDesktop');

var _BookingDesktop2 = _interopRequireDefault(_BookingDesktop);

var _db = require('./db');

var _db2 = require('../../db');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var bookingRoutes = _express2.default.Router();

bookingRoutes.get('/booking/offer=:bookingId', function (req, res) {
  console.log('offer');
  handleHomeRoute(req, res, 'offer');
});
bookingRoutes.get('/booking=:bookingId', function (req, res) {
  console.log('normal');
  handleHomeRoute(req, res, 'normal');
});

exports.default = bookingRoutes;


var d = Buffer('12').toString('base64');
console.log(d);
console.log(Buffer(d, 'base64').toString());

function handleHomeRoute(req, res, flag) {
  console.log(flag + 'ddde');
  var sheetsRegistry = new _jss.SheetsRegistry();
  var jss = (0, _jss2.create)((0, _jssPresetDefault2.default)());
  jss.options.createGenerateClassName = _createGenerateClassName2.default;
  console.log(req.params);
  (0, _db2.executeQueryAndDisconnect)((0, _db.bookingDetails)(Buffer(req.params.bookingId, 'base64').toString())).then(function (result) {
    (0, _db.formatBookDetails)(result, flag).then(function (bookingDetails) {
      var html = (0, _server.renderToString)(_react2.default.createElement(
        _JssProvider2.default,
        { registry: sheetsRegistry, jss: jss },
        _react2.default.createElement(_BookingDesktop2.default, { bookingDetails: bookingDetails })
      ));

      // Grab the CSS from our sheetsRegistry.
      var css = sheetsRegistry.toString();

      // Send the rendered page back to the client.
      res.send((0, _template2.default)(html, css));
    });
  });
  // Render the component to a string.
}