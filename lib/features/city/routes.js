import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'

import Home from './components/Home'

import { QUERY_ADMIN_MECHANIC } from './queries'
import { executeQueryAndDisconnect } from '../../db'
import { homeTemplateWithData } from './template'

const cityRoutes = express.Router()

cityRoutes.get('/chennai', function(req, res) {
  res.send('Chennai')
})

cityRoutes.get('/chennai/home', function(req, res) {
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

cityRoutes.get('/chennai/thankyou', function(req, res) {
  res.send('Thank you')

  //const data = executeQueryAndDisconnect(QUERY_ADMIN_MECHANIC).then(data =>
  //data.map(x => x.shop_name)
  //)
  //const markup = data.then(ListComp =>
  //renderToString(<ListComp data={ListComp} />)
  //)

  //Promise.all([data, markup])
  //.then(([data, markup]) =>
  //homeTemplateWithData({
  //markup: markup,
  //title: 'title val',
  //initialState: JSON.stringify(data)
  //})
  //)
  //.then(str => res.send(str))
})

export default cityRoutes
