export function bookingDetails(id) {
  return `select 
    b_db.booking_id,
    b_db.pick_up,
    b_db.service_date,
    b_db.service_type,
    b_db.locality,
    uvt.model,
    ur_db.mobile_number,
    ur_db.name,
    ur_db.email_id  from user_booking_tb as b_db
    left join user_register as ur_db on ur_db.reg_id=b_db.user_id 
    left join user_vehicle_table as uvt on uvt.id=b_db.user_veh_id where b_db.booking_id=${id}`
}

export function formatBookDetails(data, flag) {
  const bookingDetailsEnum = {
    booking_id: 'Booking Id',
    name: 'Name',
    email_id: 'Email id',
    mobile_number: 'Mobile Number',
    model: 'Vehicle Model',
    locality: 'Locality',
    service_type: 'Services',
    service_date: 'Service Date',
    pick_up: 'Pick Up'
  }
  const output = []
  console.log(flag + 'dd')
  if (flag != 'offer') {
    Object.keys(bookingDetailsEnum).forEach(value => {
      output.push({
        description: bookingDetailsEnum[value],
        value: data[0][value]
      })
    })
  } else {
    ['booking_id', 'model', 'locality', 'service_date'].forEach(value => {
      output.push({
        description: bookingDetailsEnum[value],
        value: data[0][value]
      })
    })
  }
  return Promise.resolve(output)
}
