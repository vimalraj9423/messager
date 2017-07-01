import express from 'express'

const apiRoute = express.Router()

apiRoute.get('/login', function(req, res) {
  res.send('LOin')
})

export default apiRoute
