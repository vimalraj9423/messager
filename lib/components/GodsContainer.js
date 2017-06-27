import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Gods from './GodsSSR'

export default class GodsContainer extends Component {
  constructor(props) {
    super(props)
    this.state = { gods: this.props.gods }
  }
  onAdd = ({ name, description, imgSrc }) => {
    const gods = this.state.gods
    const appendedGods = [...gods, { name, description, imgSrc }]
    this.setState({ gods: appendedGods })
  };

  render() {
    return <Gods gods={this.state.gods} onAdd={this.onAdd} />
  }
}

GodsContainer.propTypes = {
  gods: PropTypes.array.isRequired
}
