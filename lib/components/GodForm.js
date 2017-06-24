import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Paper from 'material-ui/Paper'
import FlatButton from 'material-ui/FlatButton'
import TextField from 'material-ui/TextField'
import { pink200, pink300, pink900 } from 'material-ui/styles/colors'

const defaultGodImage =
  'http://static.fjcdn.com/pictures/Greek_a565c6_5451272.jpg'

const floatingLabelStyle = {
  color: pink900
}

const underlineStyle = {
  borderColor: pink900
}

const GodFormWrapper = styled(Paper)`
  height: 300px !important;
  width: 100% !important;
  text-align: center !important;
  display: inline-block !important;
  background-color: ${pink200} !important;
`

export default class GodForm extends Component {
  constructor(props) {
    super(props)
    this.state = { name: '', description: '', imgSrc: '' }
  }

  onDescriptionChange = (event, value) => {
    this.setState({ description: value })
  };

  onNameChange = (event, value) => {
    this.setState({ name: value })
  };

  onImageChange = (event, value) => {
    this.setState({ imgSrc: value })
  };

  onAdd = () => {
    const { name, description, imgSrc } = this.state
    const imgSource = imgSrc || defaultGodImage
    this.props.onAdd({ name, description, imgSrc: imgSource })
    this.setState({ name: '', description: '', imgSrc: '' })
  };

  render() {
    return (
      <GodFormWrapper zDepth={5}>
        <TextField
          floatingLabelText="Name"
          value={this.state.name}
          onChange={this.onNameChange}
          floatingLabelStyle={floatingLabelStyle}
          floatingLabelFocusStyle={floatingLabelStyle}
          underlineFocusStyle={underlineStyle}
        />
        <br />
        <TextField
          floatingLabelText="Description"
          value={this.state.description}
          onChange={this.onDescriptionChange}
          floatingLabelStyle={floatingLabelStyle}
          floatingLabelFocusStyle={floatingLabelStyle}
          underlineFocusStyle={underlineStyle}
        />
        <br />
        <TextField
          floatingLabelText="Image"
          hintText="You can gooooogle!!!"
          value={this.state.imgSrc}
          onChange={this.onImageChange}
          floatingLabelStyle={floatingLabelStyle}
          floatingLabelFocusStyle={floatingLabelStyle}
          underlineFocusStyle={underlineStyle}
        />
        <br />
        <FlatButton
          label="Add"
          hoverColor={pink300}
          rippleColor={pink900}
          onTouchTap={this.onAdd}
        />
      </GodFormWrapper>
    )
  }
}

GodForm.propTypes = {
  onAdd: PropTypes.func.isRequired
}
