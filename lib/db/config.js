const mysql = require('mysql')

// const config = {
//   host: 'localhost',
//   user: 'root',
//   password: 'chewinggum',
//   database: 'sample'
// }

const config = {
  host: 'softset.cnjmcywhbcvu.us-west-2.rds.amazonaws.com',
  user: 'softsetuser',
  password: 'softset123',
  database: 'gobumpr_test'
}

export const connectionPool = mysql.createPool(config)
