import { executeQueryAndDisconnect } from '../db'

const QueryInsertVal =
  'INSERT INTO user_bookig_table (shop_name) VALUES (' + name + ')'
executeQueryAndDisconnect(QueryInsertVal).then(console.log('Inserted!'))
