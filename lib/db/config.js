const mysql = require('mysql')

// const config = {
//   host: 'localhost',
//   user: 'root',
//   password: 'chewinggum',
//   database: 'sample'
// }

const config = {
  host: 'localhost',
  user: 'root',
  password: 'vimal',
  database: 'gobumpr_test'
}

export const connectionPool = mysql.createPool(config)
