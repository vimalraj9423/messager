'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var data = {
  data: ['one', 'two', 'three', 'four']
};

var mockData = exports.mockData = function mockData() {
  return Promise.resolve(data.data);
};