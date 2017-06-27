import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Paper from 'material-ui/Paper'

import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'
import createPalette from 'material-ui/styles/palette'
import { green, red } from 'material-ui/styles/colors'

import GodForm from './GodForm'
import GodCards from './GodCards'

const GodWrapper = styled(Paper)`
  width: 90% !important;
  margin: 0 auto !important;
`
function createStyleManager() {
  return MuiThemeProvider.createDefaultContext({
    theme: createMuiTheme({
      palette: createPalette({
        primary: green,
        accent: red,
        type: 'light'
      })
    })
  })
}
const { theme, styleManager } = createStyleManager()

console.log('styleManager Sheets', styleManager.sheetsToString())

const GodsSSR = ({ gods, onAdd }) =>
  <MuiThemeProvider styleManager={styleManager} theme={theme}>
    <GodWrapper>
      <GodForm onAdd={onAdd} />
      <GodCards gods={gods} />
    </GodWrapper>
  </MuiThemeProvider>

GodsSSR.propTypes = {
  gods: PropTypes.array.isRequired,
  onAdd: PropTypes.func.isRequired
}
export default GodsSSR
export const godCss = styleManager
