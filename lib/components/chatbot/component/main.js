import React from 'react'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'
import { green, red, orange, blue } from 'material-ui/colors'

import * as colors from 'material-ui/colors'
//components
import ChatDesktopHome from './HOMEDESKTOP'

const theme = createMuiTheme({
  palette: {
    primary: blue,
    accent: red,
    type: 'light'
  }
})

export default class Main extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <MuiThemeProvider theme={theme} sheetsManager={new Map()}>
        <ChatDesktopHome />
      </MuiThemeProvider>
    )
  }
}
