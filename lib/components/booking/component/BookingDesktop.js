import React, { Component } from 'react'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'
import { green, red, orange } from 'material-ui/colors'
//components
import HeaderAppBar from './header'
import BookingSummary from './BookingSummary'
import SummaryBottom from './SummaryBottom'
const theme = createMuiTheme({
  palette: {
    primary: green,
    accent: red,
    type: 'light'
  }
})

export default class BookingDesktop extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <MuiThemeProvider theme={theme} sheetsManager={new Map()}>
        <div>
          <HeaderAppBar />
          <style>{'body { background-color: #eeeeee;margin:0px }'}</style>
          <BookingSummary bookingDetails={this.props.bookingDetails} />
          <SummaryBottom price="15000" />
        </div>
      </MuiThemeProvider>
    )
  }
}
