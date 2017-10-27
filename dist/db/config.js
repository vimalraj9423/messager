'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var mysql = require('mysql');

// const config = {
//   host: 'localhost',
//   user: 'root',
//   password: 'chewinggum',
//   database: 'sample'
// }

var config = {
  host: 'softset.cnjmcywhbcvu.us-west-2.rds.amazonaws.com',
  user: 'softsetuser',
  password: 'softset123',
  database: 'gobumpr_test'
};

var connectionPool = exports.connectionPool = mysql.createPool(config);