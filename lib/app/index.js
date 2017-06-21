import express from "express"
import React from "react"
import { renderToString } from "react-dom/server"

import {
  ListComp,
  Home,
  GodsContainer,
  homeTemplate,
  godsTemplate,
  homeTemplateWithData
} from "../components"

import { mockData, gods } from "./mock.js"
import { QUERY_ADMIN_MECHANIC } from "./queries"
import { executeQueryAndDisconnect } from "../db"

const app = express()

app.get("/", function(req, res) {
  const data = executequeryanddisconnect(query_admin_mechanic).then(data =>
    data.map(x => x.shop_name)
  )
  const markup = data.then(data => renderToString(<Home data={data} />))

  Promise.all([data, markup])
    .then(([data, markup]) =>
      homeTemplateWithData({
        markup: markup,
        title: "title val",
        initialState: JSON.stringify(data)
      })
    )
    .then(str => res.send(str))
})

app.get("/chennai", function(req, res) {
  res.send("Kolkata")
})

app.get("/chennai/thankyou", function(req, res) {
  executeQueryAndDisconnect(QUERY_ADMIN_MECHANIC)
    .then(data => data.map(x => x.shop_name))
    .then(ListComp => renderToString(<ListComp data={ListComp} />))
    .then(str => homeTemplate({ markup: str, title: "title val" }))
    .then(str => res.send(str))
})

app.get("/gods", function(req, res) {
  const markup = renderToString(<GodsContainer gods={gods} />)
  const html = godsTemplate({
    markup: markup,
    title: "Gods",
    initialState: JSON.stringify(gods)
  })
  res.send(html)
})

export default app
