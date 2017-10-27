'use strict';

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _app = require('./app');

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

global.navigator = global.navigator || {};
// import FCM from 'fcm-node'


global.navigator.userAgent = global.navigator.userAgent || 'all';

var PORT = process.env.PORT || 5000;

_app2.default.use('/assets', _express2.default.static(_path2.default.join(__dirname, '/assets')));

_app2.default.listen(PORT);

console.log('Server started @' + PORT);
// var serverkey = 'AIzaSyBDReq74OC2ryj2o-cAKP5pSdudASQRpe4'
// var fcm = new FCM(serverkey);

// var message ={
//     to : 'eKJYYZrG9hQ:APA91bHv9uu6GvVT_okBIbnwdQZMfRWWHF-Wtvw99RfUckBLcFUzgTxxPDrwE8msh0BFVU0QqiSsombhbuu8A0TJ5jpeks02h6XFzUkNbo4YLGMUBHOzPbc6syFS_bIspHdlD9UnZ9nV',
//     notification: {
//         title: 'Title of your push notification',
//         body: 'Body of your push notification'
//     },
//     data : {
//         message:'hai'
//     },
// };
// console.log(JSON.stringify(fcm))
// fcm.send(message, function(err,response){
//     if(err) {
//         console.log(err)
//         console.log("Something has gone wrong !");
//     } else {
//         console.log("Successfully sent with resposne :",response);
//     }
// });