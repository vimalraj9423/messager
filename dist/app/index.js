'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

var _components = require('../components');

var _mock = require('./mock.js');

var _queries = require('./queries');

var _db = require('../db');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.get('/', function (req, res) {
  var data = (0, _mock.mockData)();
  var markup = data.then(function (list) {
    return (0, _server.renderToString)(_react2.default.createElement(_components.Home, { data: list }));
  });

  Promise.all([data, markup]).then(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        data = _ref2[0],
        markup = _ref2[1];

    return (0, _components.homeTemplateWithData)({
      markup: markup,
      title: 'title val',
      initialState: JSON.stringify(data)
    });
  }).then(function (str) {
    return res.send(str);
  });
});

app.get('/chennai', function (req, res) {
  res.send('Kolkata');
});

app.get('/chennai/thankyou', function (req, res) {
  (0, _db.executeQueryAndDisconnect)(_queries.QUERY_ADMIN_MECHANIC).then(function (data) {
    return data.map(function (x) {
      return x.shop_name;
    });
  }).then(function (list) {
    return (0, _server.renderToString)(_react2.default.createElement(_components.List, { data: list }));
  }).then(function (str) {
    return (0, _components.homeTemplate)({ markup: str, title: 'title val' });
  }).then(function (str) {
    return res.send(str);
  });
});

exports.default = app;