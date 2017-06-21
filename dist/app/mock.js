"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var data = {
  data: ["one", "two", "three", "four"]
};

var gods = exports.gods = [{
  name: "Zeus",
  description: "God Of Sky"
}, {
  name: "Aries",
  description: "God Of War"
}];

var mockData = exports.mockData = function mockData() {
  return Promise.resolve(data.data);
};