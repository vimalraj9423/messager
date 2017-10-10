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

import Main from './main'

const homeRouter = express.Router()

function handleHomeRoute(req, res) {
  const sheetsRegistry = new SheetsRegistry()

  // Create a theme instance.
  const theme = createMuiTheme({
    palette: {
      primary: green,
      accent: red,
      type: 'light'
    },
    status: {
      // My business variables
      danger: orange[500]
    },
    body: {
      background: green
    },
    typography: {
      body1: {
        background: orange[500]
      },
      body2: {
        background: orange[500]
      }
    }
  })

  // Configure JSS
  const jss = create(preset())
  jss.options.createGenerateClassName = createGenerateClassName

  // Render the component to a string.
  const html = renderToString(
    <JssProvider registry={sheetsRegistry} jss={jss}>
      <MuiThemeProvider theme={theme} sheetsManager={new Map()}>
        <Main />
      </MuiThemeProvider>
    </JssProvider>
  )

  // Grab the CSS from our sheetsRegistry.
  const css = sheetsRegistry.toString()

  // Send the rendered page back to the client.
  res.send(renderFullPage(html, css))
}

homeRouter.get('/', handleHomeRoute)

export default homeRouter

function renderFullPage(html, css) {
  return `
    <!doctype html>
    <html>
      <head>
        <title>Material-UI</title>
      </head>
      <body>
        <div id="root">${html}</div>
        <style id="jss-server-side">${css}</style>
      </body>
    </html>
  `
}
