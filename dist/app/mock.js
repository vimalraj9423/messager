'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var data = {
  data: ['one', 'two', 'three']
};

var mockData = exports.mockData = function mockData() {
  return Promise.resolve(data.data);
};