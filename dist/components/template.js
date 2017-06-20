"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var homeTemplate = exports.homeTemplate = function homeTemplate(_ref) {
    var markup = _ref.markup,
        title = _ref.title;

    return "\n<!DOCTYPE html>\n<html>\n    <head>\n        <title>" + title + "</title>\n    </head>\n\n    <body>\n        <div id=\"root\">" + markup + "</div>\n    </body>\n</html>\n";
};