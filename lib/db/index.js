import { connectionPool } from './config'
const TIMEOUT_MAX = 90000

export function connectToServer(connection) {
  connection.connect(() => console.log('connection established'))
  return connection
}

export function releaseConnection(connection) {
  connection.release
    ? connection.release(() => console.log('connection released'))
    : connection.end(() => console.log('connection ended'))
  return connection
}

export function executeQueryAndDisconnect(query, connection = connectionPool) {
  return new Promise((resolve, reject) => {
    connection.query(query, function(error, results, fields) {
      if (error) throw error
      resolve(results)
      connection.emit('release', connection)
      console.log(connection._freeConnections.indexOf(connection))
    })
  })
}

export const makeQuery = (sql = '', values = [], timeout = TIMEOUT_MAX) => ({
  sql,
  values,
  timeout
})
