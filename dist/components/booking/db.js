'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bookingDetails = bookingDetails;
exports.formatBookDetails = formatBookDetails;
function bookingDetails(id) {
  return 'select \n    b_db.booking_id,\n    b_db.pick_up,\n    b_db.service_date,\n    b_db.service_type,\n    b_db.locality,\n    uvt.model,\n    ur_db.mobile_number,\n    ur_db.name,\n    ur_db.email_id  from user_booking_tb as b_db\n    left join user_register as ur_db on ur_db.reg_id=b_db.user_id \n    left join user_vehicle_table as uvt on uvt.id=b_db.user_veh_id where b_db.booking_id=' + id;
}

function formatBookDetails(data, flag) {
  var bookingDetailsEnum = {
    booking_id: 'Booking Id',
    name: 'Name',
    email_id: 'Email id',
    mobile_number: 'Mobile Number',
    model: 'Vehicle Model',
    locality: 'Locality',
    service_type: 'Services',
    service_date: 'Service Date',
    pick_up: 'Pick Up'
  };
  var output = [];
  console.log(flag + 'dd');
  if (flag != 'offer') {
    Object.keys(bookingDetailsEnum).forEach(function (value) {
      output.push({
        description: bookingDetailsEnum[value],
        value: data[0][value]
      });
    });
  } else {
    ['booking_id', 'model', 'locality', 'service_date'].forEach(function (value) {
      output.push({
        description: bookingDetailsEnum[value],
        value: data[0][value]
      });
    });
  }
  return Promise.resolve(output);
}