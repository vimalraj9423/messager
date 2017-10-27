'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

var _jss = require('react-jss/lib/jss');

var _JssProvider = require('react-jss/lib/JssProvider');

var _JssProvider2 = _interopRequireDefault(_JssProvider);

var _jss2 = require('jss');

var _jssPresetDefault = require('jss-preset-default');

var _jssPresetDefault2 = _interopRequireDefault(_jssPresetDefault);

var _styles = require('material-ui/styles');

var _createGenerateClassName = require('material-ui/styles/createGenerateClassName');

var _createGenerateClassName2 = _interopRequireDefault(_createGenerateClassName);

var _colors = require('material-ui/colors');

var _Checkbox = require('material-ui/Checkbox');

var _Checkbox2 = _interopRequireDefault(_Checkbox);

var _db = require('../../db');

var _main = require('./component/main');

var _main2 = _interopRequireDefault(_main);

var _template = require('./template');

var _template2 = _interopRequireDefault(_template);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//module end

var chatRoutes = _express2.default.Router();

chatRoutes.get('/chat-bot', function (req, res) {
  handleHomeRoute(req, res);
});

chatRoutes.get('/chat/userList', function (req, res) {
  (0, _db.executeQueryAndDisconnect)('SELECT user_register.*,userList.* FROM user_register right join (select uid,(select Cust2User from chatlogs as s where s.uid=p.UID  order by s.log desc,s.id desc limit 1) as Cust2User,(select message from chatlogs as s where s.uid=p.UID  order by s.log desc,s.id desc limit 1) as message,\n  (select log from chatlogs as s where s.uid=p.UID  order by s.log desc limit 1) as log from chatlogs as p group by p.uid order by log desc) as userList on user_register.reg_id=userList.UID where userList.UID!=0;\n').then(function (result) {
    res.send(result);
  });
});
chatRoutes.get('/chat/messageList/:id', function (req, res) {
  (0, _db.executeQueryAndDisconnect)('select * from chatlogs where uid=' + req.params.id + ' order by log').then(function (result) {
    res.send(result);
  });
});
chatRoutes.post('/chat/message/update', function (req, res) {
  var body = req.body;
  console.log(body);
  (0, _db.executeQueryAndDisconnect)('insert into chatlogs (UID,message,Cust2User)values("' + body.data.uid + '","' + body.data.message + '",1)').then(function (result) {
    res.send(result);
  });
});
exports.default = chatRoutes;


function handleHomeRoute(req, res) {
  var sheetsRegistry = new _jss.SheetsRegistry();
  var jss = (0, _jss2.create)((0, _jssPresetDefault2.default)());
  jss.options.createGenerateClassName = _createGenerateClassName2.default;

  var html = (0, _server.renderToString)(_react2.default.createElement(
    _JssProvider2.default,
    { registry: sheetsRegistry, jss: jss },
    _react2.default.createElement(_main2.default, null)
  ));

  // Grab the CSS from our sheetsRegistry.
  var css = sheetsRegistry.toString();

  // Send the rendered page back to the client.
  res.send((0, _template2.default)(html, css));
  // Render the component to a string.
}