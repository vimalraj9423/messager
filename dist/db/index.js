'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeQuery = undefined;
exports.connectToServer = connectToServer;
exports.executeQueryAndDisconnect = executeQueryAndDisconnect;

var _config = require('./config');

var TIMEOUT_MAX = 90000;

function connectToServer(connection) {
  connection.connect(function () {
    return console.log('connection established');
  });
  return connection;
}

function releaseConnection(connection) {
  connection.release ? connection.release(function () {
    return console.log('connection released');
  }) : connection.end(function () {
    return console.log('connection ended');
  });
  return connection;
}

function executeQueryAndDisconnect(query) {
  var connection = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _config.connectionPool;

  return new Promise(function (resolve, reject) {
    connection.query(query, function (error, results, fields) {
      if (error) throw error;
      resolve(results);
      connection.emit('release', connection);
      console.log(connection._freeConnections.indexOf(connection));
    });
  });
}

var makeQuery = exports.makeQuery = function makeQuery() {
  var sql = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var values = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var timeout = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : TIMEOUT_MAX;
  return {
    sql: sql,
    values: values,
    timeout: timeout
  };
};