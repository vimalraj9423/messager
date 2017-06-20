"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var homeTemplate = exports.homeTemplate = function homeTemplate(_ref) {
    var markup = _ref.markup,
        title = _ref.title;

    return "\n<!DOCTYPE html>\n<html>\n    <head>\n        <title>" + title + "</title>\n    </head>\n    <body>\n        <div id=\"root\">" + markup + "</div>\n    </body>\n</html>\n";
};

var homeTemplateWithData = exports.homeTemplateWithData = function homeTemplateWithData(_ref2) {
    var markup = _ref2.markup,
        title = _ref2.title,
        initialState = _ref2.initialState;

    return "\n<!DOCTYPE html>\n<html>\n    <head>\n        <title>" + title + "</title>\n         <script>window.__APP_INITIAL_STATE__ = " + initialState + "</script>\n    </head>\n    <body>\n        <div id=\"root\">" + markup + "</div>\n       <script src=\"./assets/home.bundle.js\"></script>\n    </body>\n</html>\n";
};