import React from 'react'
import styled from 'styled-components'

import Paper from 'material-ui/Paper'

import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'
import createPalette from 'material-ui/styles/palette'
import { orange } from 'material-ui/styles/colors'

import formElem from './form'

const formWrapper = styled(Paper)`
  width: 50% !important;
  margin: 0 auto !important;
`
function createStyleManager() {
  return MuiThemeProvider.createDefaultContext({
    theme: createMuiTheme({
      palette: createPalette({
        primary: orange,
        type: 'light'
      })
    })
  })
}
const { theme, styleManager } = createStyleManager()

console.log('styleManager Sheets form', styleManager.sheetsToString())

const formSSR = () =>
  <MuiThemeProvider styleManager={styleManager} theme={theme}>
    <formWrapper>
      <formElem />
    </formWrapper>
  </MuiThemeProvider>

export default formSSR
export const formCss = styleManager
