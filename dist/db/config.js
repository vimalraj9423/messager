"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var mysql = require("mysql");

var config = {
  host: "localhost",
  user: "root",
  password: "chewinggum",
  database: "sample"
};

var connectionPool = exports.connectionPool = mysql.createPool(config);