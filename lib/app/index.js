import express from 'express'
import defaultRoute from './routes'
import godRoutes from '../features/gods/routes'
import cityRoutes from '../features/city/routes'
import apiRoute from './api'

const app = express()

app.use(defaultRoute)

app.use(godRoutes)

app.use(cityRoutes)

app.use('/api/', apiRoute)

export default app
