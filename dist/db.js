'use strict';

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

var _app = require('./components/app.js');

var _app2 = _interopRequireDefault(_app);

var _template = require('./components/template.js');

var _template2 = _interopRequireDefault(_template);

var _list = require('./components/list.js');

var _list2 = _interopRequireDefault(_list);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var infoR = function infoR(x) {
    console.log(x);
    return x;
};

var app = (0, _express2.default)();

var executeQuery = function executeQuery(connection) {
    var query = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

    return new Promise(function (resolve, reject) {
        connection.query('select * from admin_mechanic_table LIMIT 0,5', function (err, rows, fields) {
            if (err) throw err;
            console.log("db");
            var rowsVals = rows;
            resolve(rowsVals);
        });
    });
};

app.get('/chennai', function (req, res) {
    res.send("Chennai Page!");
});

app.get('/chennai/thankyou', function (req, res) {
    var connection = _mysql2.default.createConnection({
        host: "localhost",
        user: "root",
        password: "SiriVaishu57",
        database: "go_bumpr"
    });
    executeQuery(connection
    // .then(infoR)
    ).then(function (data) {
        return data.map(function (x) {
            return x.shop_name;
        });
    }).then(function (list) {
        return (0, _server.renderToString)(_react2.default.createElement(_list2.default, { data: list }));
    }).then(function (str) {
        return (0, _template2.default)({ markup: str, title: "title val" });
    }).then(function (str) {
        return res.send(str);
    }

    //const data = ["one", "two", "three"]

    //const markup = renderToString(<List data={data} />);
    //res.send(template({ markup, title: "title val" }))
    );
});

app.listen(3000);