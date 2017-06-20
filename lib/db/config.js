const mysql = require("mysql")

const config = {
  host: "localhost",
  user: "root",
  password: "chewinggum",
  database: "sample"
}

export const connectionPool = mysql.createPool(config)
