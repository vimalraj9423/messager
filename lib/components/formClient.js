import React from 'react'
import { render } from 'react-dom'
// import formElem from './form'
import formSSR from './formSCss'
import injectTapEventPlugin from 'react-tap-event-plugin'

injectTapEventPlugin()

render(<formSSR />, document.getElemenetById('root'))
