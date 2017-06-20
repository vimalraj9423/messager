import http from 'http'
import express from 'express'
import mysql from 'mysql'
import compression from 'compression'
import React from 'react';
import { renderToString } from 'react-dom/server'

import App from '../components/app.js'
import List from '../components/list.js'
import {homeTemplate} from '../components/template.js'

import { QUERY_ADMIN_MECHANIC } from './queries'
import { executeQueryAndDisconnect } from '../db'

const app = express()

app.get('/chennai', function (req, res) {
    res.send("Delhi")
})

app.get('/chennai/thankyou', function (req, res) {
    const connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "SiriVaishu57",
        database: "go_bumpr"
    })

    executeQueryAndDisconnect(QUERY_ADMIN_MECHANIC,connection)
    .then(data => data.map(x => x.shop_name))
    .then(list => renderToString(<List data={list} />))
    .then(str => homeTemplate({markup : str ,title: "title val"}))
    .then(str => res.send(str))
})

export default app

