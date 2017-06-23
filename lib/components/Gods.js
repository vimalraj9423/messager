import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Paper from 'material-ui/Paper'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import GodForm from './GodForm'
import GodCards from './GodCards'

const GodWrapper = styled(Paper)`
  width: 90% !important;
  margin: 0 auto !important;
`
const Gods = ({ gods, onAdd }) =>
  <MuiThemeProvider>
    <GodWrapper>
      <GodForm onAdd={onAdd} />
      <GodCards gods={gods} />
    </GodWrapper>
  </MuiThemeProvider>

Gods.propTypes = {
  gods: PropTypes.array.isRequired,
  onAdd: PropTypes.func.isRequired
}
export default Gods
