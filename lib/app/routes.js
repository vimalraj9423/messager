import express from 'express'
import React from 'react'
import mysql from 'mysql'
// import SwipeableClient from 'SwipeableClient'
import { ServerStyleSheet } from 'styled-components'
import { renderToString } from 'react-dom/server'
import FormSSR, { formCss } from '../components/formSCss'
import {
  Swipeables,
  SwipeableTemplate,
  // formElem,
  formTemplate
} from '../components'

const router = express.Router()

router.get('/', function(req, res) {
  var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'SiriVaishu57',
    database: 'go_bumpr'
  })

  connection.connect()

  connection.query('select * from admin_mechanic_table LIMIT 0,5', function(
    err,
    rows,
    fields
  ) {
    if (err) throw err

    console.log('db')
    var rowsVals = rows
    res.send(rowsVals)
  })
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

router.get('/form', function(req, res) {
  const sheet = new ServerStyleSheet()
  console.log(renderToString(sheet.collectStyles(<FormSSR />)))
  const markup = renderToString(sheet.collectStyles(<FormSSR />))
  const styledCss = sheet.getStyleTags() // or sheet.getStyleElement()
  // console.log(styledCss)
  const str = formTemplate({
    markup: markup,
    title: 'Form!',
    css: formCss,
    styledCss: styledCss
  })

  res.send(str)
})

export default router
