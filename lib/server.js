import path from 'path'
import express from 'express'

import app from './app'

global.navigator = global.navigator || {}

global.navigator.userAgent = global.navigator.userAgent || 'all'

const PORT = 4000

app.use('/assets', express.static(path.join(__dirname, '/assets')))

app.listen(PORT)

console.log(`Server started @${PORT}`)
