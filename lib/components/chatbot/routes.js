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
import { executeQueryAndDisconnect } from '../../db'
//module end

import Main from './component/main'

import renderFullPage from './template'
const chatRoutes = express.Router()

chatRoutes.get('/chat-bot', (req, res) => {
  handleHomeRoute(req, res)
})

chatRoutes.get('/chat/userList', (req, res) => {
  executeQueryAndDisconnect(`SELECT user_register.*,userList.* FROM user_register right join (select uid,(select Cust2User from chatlogs as s where s.uid=p.UID  order by s.log desc,s.id desc limit 1) as Cust2User,(select message from chatlogs as s where s.uid=p.UID  order by s.log desc,s.id desc limit 1) as message,
  (select log from chatlogs as s where s.uid=p.UID  order by s.log desc limit 1) as log from chatlogs as p group by p.uid order by log desc) as userList on user_register.reg_id=userList.UID where userList.UID!=0;
`).then(result => {
  res.send(result)
})
})
chatRoutes.get('/chat/messageList/:id', (req, res) => {
  executeQueryAndDisconnect(
    `select * from chatlogs where uid=${req.params.id} order by log`
  ).then(result => {
    res.send(result)
  })
})
chatRoutes.post('/chat/message/update', (req, res) => {
  var body = req.body
  console.log(body)
  executeQueryAndDisconnect(
    `insert into chatlogs (UID,message,Cust2User)values("${body.data
      .uid}","${body.data.message}",1)`
  ).then(result => {
    res.send(result)
  })
})
export default chatRoutes

function handleHomeRoute(req, res) {
  const sheetsRegistry = new SheetsRegistry()
  const jss = create(preset())
  jss.options.createGenerateClassName = createGenerateClassName

  const html = renderToString(
    <JssProvider registry={sheetsRegistry} jss={jss}>
      <Main />
    </JssProvider>
  )

  // Grab the CSS from our sheetsRegistry.
  const css = sheetsRegistry.toString()

  // Send the rendered page back to the client.
  res.send(renderFullPage(html, css))
  // Render the component to a string.
}
