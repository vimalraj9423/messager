import React from 'react'
import injectTapEventPlugin from 'react-tap-event-plugin'
import { List, ListItem } from 'material-ui/List'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import PropTypes from 'prop-types'

injectTapEventPlugin()

const ListItems = ({ item }) => <ListItem primaryText={item} />

ListItems.propTypes = {
  item: PropTypes.string.isRequired
}

const ListComp = ({ data: listData }) =>
  <MuiThemeProvider>
    <List>
      {listData.map(item => <ListItems key={item} item={item} />)}
    </List>
  </MuiThemeProvider>

ListComp.propTypes = {
  data: PropTypes.array.isRequired
}

export default ListComp
