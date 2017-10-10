import React, { Component } from 'react'
import PropTypes from 'prop-types'
// import createStyleManager from '../Theme/ThemeStyles'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'
import { orange } from 'material-ui/colors'
import Mobile from './mobile'
const theme = createMuiTheme({
  typography: {
    headline: {
      paddingTop: '12px',
      paddingBottom: '12px',
      fontFamily: '"Roboto", sans-serif'
    },
    body: {
      paddingBottom: '12px',
      backgroundcolor: 'green'
    },
    h1: {
      fontFamily: '"Roboto", sans-serif'
    },
    h2: {
      fontFamily: '"Roboto", sans-serif'
    }
  },
  MuiDrawer: {
    anchorTop: {
      overflow: 'inherit'
    }
  },
  MuiPaper: {},
  MuiInput: {
    inkbar: {
      '&:after': {
        left: 0,
        right: 0,
        bottom: 0,
        height: '2px',
        content: '',
        position: 'absolute',
        transform: 'scaleX(0)',
        transition: 'transform 200ms cubic-bezier(0.0, 0.0, 0.2, 1) 0ms',
        backgroundcolor: '#ffa800'
      }
    },
    focused: {
      transform: 'scaleX(1)'
    }
  },
  palette: {
    primary: orange,
    type: 'light',
    accent: orange,
    secondary: orange
  }
})

export class HomeSSRDesktop extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme} sheetsManager={new Map()}>
        <Mobile />
      </MuiThemeProvider>
    )
  }
}

export default HomeSSRDesktop
// export const HomeCssDesktop = styleManager
