import path from 'path'
import express from 'express'
// import FCM from 'fcm-node'
import app from './app'
global.navigator = global.navigator || {}

global.navigator.userAgent = global.navigator.userAgent || 'all'

const PORT = process.env.PORT || 5000

app.use('/assets', express.static(path.join(__dirname, '/assets')))

app.listen(PORT)

console.log(`Server started @${PORT}`)
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
