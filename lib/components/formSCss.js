import React from 'react'
import styled from 'styled-components'

import Paper from 'material-ui/Paper'

import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'
import createPalette from 'material-ui/styles/palette'
import { orange } from 'material-ui/styles/colors'

import FormElem from './form'

const FormWrapper = styled(Paper)`
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
const { styleManager, theme } = createStyleManager()

console.log('styleManager Sheets form', styleManager.sheetsToString())

const FormSSR = () =>
  <MuiThemeProvider styleManager={styleManager} theme={theme}>
    <FormWrapper>
      <FormElem />
    </FormWrapper>
  </MuiThemeProvider>

export default FormSSR
export const FormCss = styleManager
