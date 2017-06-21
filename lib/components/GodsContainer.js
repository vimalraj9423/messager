import React, { Component } from "react"
import Gods from "./Gods"

export default class GodsContainer extends Component {
  constructor(props) {
    super(props)
    this.state = { gods: this.props.gods }
  }
  onAdd = ({ name, description }) => {
    const gods = this.state.gods
    const appendedGods = [...gods, { name, description }]
    this.setState({ gods: appendedGods })
  }

  render() {
    return <Gods gods={this.state.gods} onAdd={this.onAdd} />
  }
}
