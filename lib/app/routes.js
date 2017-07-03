import express from 'express'
import React from 'react'
// import SwipeableClient from 'SwipeableClient'
import { renderToString } from 'react-dom/server'
import { Swipeables, SwipeableTemplate } from '../components'

const router = express.Router()

router.get('/', function(req, res) {
  res.send('Express is up')
})

router.get('/carousel', function(req, res) {
  console.log(renderToString(<Swipeables />))
  const markup = renderToString(<Swipeables />)
  const str = SwipeableTemplate({
    markup: markup,
    title: 'Carousel'
  })

  res.send(str)
})

export default router
