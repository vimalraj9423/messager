"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var renderFullPage = function renderFullPage(html, css) {
  return "\n      <!doctype html>\n      <html>\n        <head>\n          <title>Material-UI</title>\n        </head>\n        <body>\n          <div id=\"root\">" + html + "</div>\n          <style id=\"jss-server-side\">" + css + "</style>\n          <style src=\"./assets/booking.bundle.js\"></style>\n        </body>\n      </html>\n    ";
};

exports.default = renderFullPage;