'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _mysql = require('mysql');

var _mysql2 = _interopRequireDefault(_mysql);

var _compression = require('compression');

var _compression2 = _interopRequireDefault(_compression);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

var _app = require('../components/app.js');

var _app2 = _interopRequireDefault(_app);

var _list = require('../components/list.js');

var _list2 = _interopRequireDefault(_list);

var _template = require('../components/template.js');

var _queries = require('./queries');

var _db = require('../db');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.get('/chennai', function (req, res) {
    res.send("Delhi");
});

app.get('/chennai/thankyou', function (req, res) {
    var connection = _mysql2.default.createConnection({
        host: "localhost",
        user: "root",
        password: "SiriVaishu57",
        database: "go_bumpr"
    });

    (0, _db.executeQueryAndDisconnect)(_queries.QUERY_ADMIN_MECHANIC, connection).then(function (data) {
        return data.map(function (x) {
            return x.shop_name;
        });
    }).then(function (list) {
        return (0, _server.renderToString)(_react2.default.createElement(_list2.default, { data: list }));
    }).then(function (str) {
        return (0, _template.homeTemplate)({ markup: str, title: "title val" });
    }).then(function (str) {
        return res.send(str);
    });
});

exports.default = app;