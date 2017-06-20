const { makeQuery } = require("../db/index")

const QUERY_SAMPLE = makeQuery("SELECT 1")

const QUERY_POTLUCK_ALL = makeQuery("SELECT * FROM `potluck`")

const QUERY_POTLUCK_JOHN = makeQuery(
  "SELECT * FROM `potluck` WHERE `name`= ?",
  ["John"]
)

const QUERY_ADMIN_MECHANIC = 'select * from admin_mechanic_table LIMIT 0,5'

module.exports = {
  QUERY_SAMPLE,
  QUERY_POTLUCK_ALL,
  QUERY_ADMIN_MECHANIC,
  QUERY_POTLUCK_JOHN
}