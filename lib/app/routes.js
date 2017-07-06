import express from 'express'
import React from 'react'
import mysql from 'mysql'
// import SwipeableClient from 'SwipeableClient'
import { ServerStyleSheet } from 'styled-components'
import { renderToString } from 'react-dom/server'
import FormSSR, { FormCss } from '../components/formSCss'
import {
  Swipeables,
  SwipeableTemplate,
  // formElem,
  FormTemplate
} from '../components'
import { executeQueryAndDisconnect } from '../db'
var bodyParser = require('body-parser')

const router = express.Router()

router.use(bodyParser.json()) // to support JSON-encoded bodies
router.use(
  bodyParser.urlencoded({
    // to support URL-encoded bodies
    extended: true
  })
)

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
  // console.log(renderToString(sheet.collectStyles(<FormSSR />)))

  const markup = renderToString(sheet.collectStyles(<FormSSR />))
  const styledCss = sheet.getStyleTags() // or sheet.getStyleElement()
  // console.log(styledCss)
  const str = FormTemplate({
    markup: markup,
    title: 'Form!',
    css: FormCss,
    styledCss: styledCss
  })

  res.send(str)
})

router.post('/insertForm', function(req, res) {
  const QUERY_INSERT = `INSERT INTO temp_test (name) VALUES ('"${req.body
    .name}"')`
  executeQueryAndDisconnect(QUERY_INSERT).then(data => res.send(data))
})

export default router
