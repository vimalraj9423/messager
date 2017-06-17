import http from 'http'
import express from 'express'
import mysql from 'mysql'
import compression from 'compression'
import React from 'react';
import { renderToString } from 'react-dom/server'
import App from './components/app.js'
import template from './components/template.js'
import List from './components/list.js'
const infoR = x => {
    console.log(x)
    return x
}

var app = express()

const executeQuery = (connection, query = '') => {
    return new Promise((resolve, reject) => {
        connection.query('select * from admin_mechanic_table LIMIT 0,5', function (err, rows, fields) {
            if (err) throw err
            console.log("db")
            var rowsVals = rows
            resolve(rowsVals)
        });
    })
}

app.get('/chennai', function (req, res) {
    res.send("Chennai Page!")
})

app.get('/chennai/thankyou', function (req, res) {
    var connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "SiriVaishu57",
        database: "go_bumpr"
    })
    executeQuery(connection)
   // .then(infoR)
    .then(data => data.map(x => x.shop_name))
    .then(list => renderToString(<List data={list} />))
    .then(str => template({markup : str ,title: "title val"}))
    .then(str => res.send(str))

    //const data = ["one", "two", "three"]

    //const markup = renderToString(<List data={data} />);
    //res.send(template({ markup, title: "title val" }))
})

app.listen(3000)

