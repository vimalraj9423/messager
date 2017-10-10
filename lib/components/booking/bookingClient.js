import React from 'react'
import { render } from 'react-dom'
import injectTapEventPlugin from 'react-tap-event-plugin'
import BookingDesktop from './component/BookingDesktop'
injectTapEventPlugin()
render(<BookingDesktop />, document.getElementById('root'))
