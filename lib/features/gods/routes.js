import express from 'express'
import React from 'react'
import { mockGods } from './mock'
import { renderToString } from 'react-dom/server'
import { ServerStyleSheet } from 'styled-components'

import GodsContainer from './components/GodsContainer'
import { godCss } from './components/GodsSSR'
import { godsTemplateWithCss, godsTemplate } from './template'

const godRoutes = express.Router()

godRoutes.get('/gods', function(req, res) {
  const godsData = mockGods()
  const markup = godsData.then(gods =>
    renderToString(<GodsContainer gods={gods} />)
  )

  Promise.all([godsData, markup])
    .then(([gods, markup]) =>
      godsTemplate({
        markup: markup,
        title: 'Gods',
        initialState: JSON.stringify(gods)
      })
    )
    .then(str => res.send(str))
})

godRoutes.get('/godss', function(req, res) {
  const sheet = new ServerStyleSheet()
  const godsData = mockGods()
  const markup = godsData.then(gods =>
    renderToString(sheet.collectStyles(<GodsContainer gods={gods} />))
  )

  Promise.all([godsData, markup])
    .then(([gods, markup]) => {
      const styledCss = sheet.getStyleTags() // or sheet.getStyleElement()
      return godsTemplateWithCss({
        markup: markup,
        title: 'Gods',
        css: godCss,
        styledCss: styledCss,
        initialState: JSON.stringify(gods)
      })
    })
    .then(str => res.send(str))
})

export default godRoutes
