import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar'
export default class Mobile extends Component {
  render() {
    return (
      <AppBar
        title="Title"
        iconClassNameRight="muidocs-icon-navigation-expand-more"
      />
    )
  }
}
