import React from 'react'
import { render } from 'react-dom'
import GodsContainer from './GodsContainer'
import injectTapEventPlugin from 'react-tap-event-plugin'

injectTapEventPlugin()
render(
  <GodsContainer gods={window.__APP_INITIAL_STATE__} />,
  document.getElementById('root')
)
