import express from 'express'
import homeRouter from '../components/raja/routes.js'

import bookingRoutes from '../components/booking/routes'
import chatRoutes from '../components/chatbot/routes'
const app = express()
var bodyParser = require('body-parser')
app.use(bodyParser.json()) // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true }))
app.use(homeRouter)
app.use(bookingRoutes)
app.use(chatRoutes)
export default app
