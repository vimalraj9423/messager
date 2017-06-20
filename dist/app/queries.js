"use strict";

var _require = require("../db/index"),
    makeQuery = _require.makeQuery;

var QUERY_SAMPLE = makeQuery("SELECT 1");

var QUERY_POTLUCK_ALL = makeQuery("SELECT * FROM `potluck`");

var QUERY_POTLUCK_JOHN = makeQuery("SELECT * FROM `potluck` WHERE `name`= ?", ["John"]);

var QUERY_ADMIN_MECHANIC = "select * from admin_mechanic_table LIMIT 0,5";

module.exports = {
  QUERY_SAMPLE: QUERY_SAMPLE,
  QUERY_POTLUCK_ALL: QUERY_POTLUCK_ALL,
  QUERY_ADMIN_MECHANIC: QUERY_ADMIN_MECHANIC,
  QUERY_POTLUCK_JOHN: QUERY_POTLUCK_JOHN
};