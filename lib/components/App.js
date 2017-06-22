import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import MyAwesomeReactComponent from './MyAwesomeReactComponent'

const App = () =>
  <MuiThemeProvider>
    <MyAwesomeReactComponent />
  </MuiThemeProvider>

export class app extends React.Component {
  render() {
    return (
      <div>
        Hello World!!!
      </div>
    )
  }
}

export default App
