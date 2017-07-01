import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Paper from 'material-ui/Paper'
import Button from 'material-ui/Button'
import TextField from 'material-ui/TextField'
import { pink } from 'material-ui/styles/colors'

const defaultGodImage =
  'http://static.fjcdn.com/pictures/Greek_a565c6_5451272.jpg'

const GodFormWrapper = styled(Paper)`
  width: 100% !important;
  text-align: center;
  display: inline-block;
  background-color: ${pink[200]} !important;
`

export default class GodForm extends Component {
  constructor(props) {
    super(props)
    this.state = { name: '', description: '', imgSrc: '' }
  }

  onDescriptionChange = event => {
    this.setState({ description: event.target.value })
  }

  onNameChange = event => {
    this.setState({ name: event.target.value })
  }

  onImageChange = event => {
    this.setState({ imgSrc: event.target.value })
  }

  onAdd = () => {
    const { name, description, imgSrc } = this.state
    const imgSource = imgSrc || defaultGodImage
    this.props.onAdd({ name, description, imgSrc: imgSource })
    this.setState({ name: '', description: '', imgSrc: '' })
  }

  render() {
    return (
      <GodFormWrapper elevation={5}>
        <TextField
          label="Name"
          value={this.state.name}
          onChange={this.onNameChange}
        />
        <br />
        <TextField
          label="Description"
          value={this.state.description}
          onChange={this.onDescriptionChange}
        />
        <br />
        <TextField
          label="Image"
          value={this.state.imgSrc}
          InputProps={{ placeholder: 'U can google!!!' }}
          onChange={this.onImageChange}
        />
        <br />
        <Button color="accent" onTouchTap={this.onAdd}>
          Add
        </Button>
      </GodFormWrapper>
    )
  }
}

GodForm.propTypes = {
  onAdd: PropTypes.func.isRequired
}
