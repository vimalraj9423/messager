"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var renderFullPage = function renderFullPage(html, css) {
  return "\n      <!doctype html>\n      <html>\n        <head>\n          <title>Chat</title>\n        </head>\n        <body style=\"margin:0px\">\n          <div id=\"root\">" + html + "</div>\n          <style id=\"jss-server-side\">" + css + "</style>\n          <script src=\"./assets/chat.bundle.js\"></script>\n        </body>\n      </html>\n    ";
};

exports.default = renderFullPage;