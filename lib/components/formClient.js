import React from 'react'
import { render } from 'react-dom'
// import formElem from './form'
import FormSSR from './formSCss'
import injectTapEventPlugin from 'react-tap-event-plugin'

injectTapEventPlugin()

render(<FormSSR />, document.getElementById('root'))
