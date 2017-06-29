import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { ServerStyleSheet } from 'styled-components'
import {
  Home,
  GodsContainer,
  // homeTemplate,
  godsTemplate,
  godsTemplateWithCss,
  godCss,
  // slider,
  ListComp,
  Swipeable,
  homeTemplateWithData,
  SwipeableTemplate
} from '../components'

import { mockGods } from './mock.js'
import { QUERY_ADMIN_MECHANIC } from './queries'
import { executeQueryAndDisconnect } from '../db'

const app = express()

app.get('/', function(req, res) {
  const data = executeQueryAndDisconnect(QUERY_ADMIN_MECHANIC).then(data =>
    data.map(x => x.shop_name)
  )
  const markup = data.then(data => renderToString(<Home data={data} />))

  Promise.all([data, markup])
    .then(([data, markup]) =>
      homeTemplateWithData({
        markup: markup,
        title: 'title val',
        initialState: JSON.stringify(data)
      })
    )
    .then(str => res.send(str))
})

app.get('/chennai', function(req, res) {
  res.send('Kolkata')
})

app.get('/chennai/thankyou', function(req, res) {
  const data = executeQueryAndDisconnect(QUERY_ADMIN_MECHANIC).then(data =>
    data.map(x => x.shop_name)
  )
  const markup = data.then(data =>
    renderToString(<ListComp data={ListComp} />)
  )

  Promise.all([data, markup])
    .then(([data, markup]) =>
      homeTemplateWithData({
        markup: markup,
        title: 'title val',
        initialState: JSON.stringify(data)
      })
    )
    .then(str => res.send(str))
})

app.get('/gods', function(req, res) {
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

app.get('/godss', function(req, res) {
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

// app.get('/carousel', function (req, res) {
//   console.log(renderToString(<slider />))
//   const markup = renderToString(<slider />)
//   const str = homeTemplate({
//     markup: markup,
//     title: 'Carousel'
//   })

//   res.send(str)
// })

app.get('/carousel', function(req, res) {
  const markup = renderToString(<Swipeable />)
  const out = SwipeableTemplate({
    markup: markup,
    title: 'Carousel'
  })
  res.send(out)
})

export default app
