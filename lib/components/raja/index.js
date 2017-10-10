import React from 'react'
import { render } from 'react-dom'
import injectTapEventPlugin from 'react-tap-event-plugin'
import HomeSSRDesktop from './HOMESSR'
injectTapEventPlugin()

render(
  <HomeSSRDesktop {...window.__APP_INITIAL_STATE__} />,
  document.getElementById('root')
)
