const mysql = require('mysql')

const config = {
  host: 'localhost',
  user: 'root',
  password: 'chewinggum',
  database: 'sample'
}

// const config = {
// host: "localhost",
// user: "root",
// password: "SiriVaishu57",
// database: "go_bumpr"
// }
//
export const connectionPool = mysql.createPool(config)
