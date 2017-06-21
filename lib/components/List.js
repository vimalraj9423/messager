import React from 'react'
import injectTapEventPlugin from 'react-tap-event-plugin'
import { List, ListItem } from 'material-ui/List'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'


injectTapEventPlugin()

const ListItems = ({ item }) => <ListItem primaryText={item} />

const ListComp = ({ data: listData }) =>
  <MuiThemeProvider>
    <List>
      {listData.map(item => <ListItems key={item} item={item} />)}
    </List>
  </MuiThemeProvider>

export default ListComp
