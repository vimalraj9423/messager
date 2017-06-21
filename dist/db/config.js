"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var mysql = require("mysql");

// const config = {
//   host: 'localhost',
//   user: 'root',
//   password: 'chewinggum',
//   database: 'sample'
// }

var config = {
  host: "localhost",
  user: "root",
  password: "SiriVaishu57",
  database: "go_bumpr"
};

var connectionPool = exports.connectionPool = mysql.createPool(config);