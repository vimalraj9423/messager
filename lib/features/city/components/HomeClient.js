import React from 'react'
import { render } from 'react-dom'
import Home from './Home'

render(
  <Home data={window.__APP_INITIAL_STATE__} />,
  document.getElementById('root')
)
