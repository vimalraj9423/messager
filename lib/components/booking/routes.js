import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { SheetsRegistry } from 'react-jss/lib/jss'
import JssProvider from 'react-jss/lib/JssProvider'
import { create } from 'jss'
import preset from 'jss-preset-default'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'
import createGenerateClassName from 'material-ui/styles/createGenerateClassName'
import { green, red, orange } from 'material-ui/colors'
import Checkbox from 'material-ui/Checkbox'
import renderFullPage from './template'
import BookingDesktop from './component/BookingDesktop'
import { bookingDetails, formatBookDetails } from './db'
import { executeQueryAndDisconnect } from '../../db'
const bookingRoutes = express.Router()

bookingRoutes.get('/booking/offer=:bookingId', (req, res) => {
  console.log('offer')
  handleHomeRoute(req, res, 'offer')
})
bookingRoutes.get('/booking=:bookingId', (req, res) => {
  console.log('normal')
  handleHomeRoute(req, res, 'normal')
})

export default bookingRoutes

var d = Buffer('12').toString('base64')
console.log(d)
console.log(Buffer(d, 'base64').toString())

function handleHomeRoute(req, res, flag) {
  console.log(flag + 'ddde')
  const sheetsRegistry = new SheetsRegistry()
  const jss = create(preset())
  jss.options.createGenerateClassName = createGenerateClassName
  console.log(req.params)
  executeQueryAndDisconnect(
    bookingDetails(Buffer(req.params.bookingId, 'base64').toString())
  ).then(result => {
    formatBookDetails(result, flag).then(bookingDetails => {
      const html = renderToString(
        <JssProvider registry={sheetsRegistry} jss={jss}>
          <BookingDesktop bookingDetails={bookingDetails} />
        </JssProvider>
      )

      // Grab the CSS from our sheetsRegistry.
      const css = sheetsRegistry.toString()

      // Send the rendered page back to the client.
      res.send(renderFullPage(html, css))
    })
  })
  // Render the component to a string.
}
