import React, { Component } from 'react'
import Paper from 'material-ui/Paper'
import FlatButton from 'material-ui/FlatButton'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import TextField from 'material-ui/TextField'
import { Card, CardText, CardMedia, CardTitle } from 'material-ui/Card'
import { pink200, pink300, pink900 } from 'material-ui/styles/colors'
import PropTypes from 'prop-types'

const defaultGodImage =
  'http://static.fjcdn.com/pictures/Greek_a565c6_5451272.jpg'

const styleHeader = {
  height: 300,
  width: '100%',
  textAlign: 'center',
  display: 'inline-block',
  backgroundColor: pink200
}

const styleBody = {
  minHeight: 450,
  width: '100%',
  textAlign: 'center',
  display: 'inline-block'
}

const styleCard = {
  width: 200,
  padding: 10,
  margin: 10,
  textAlign: 'center',
  display: 'inline-block'
}

const floatingLabelStyle = {
  color: pink900
}
const underlineStyle = {
  borderColor: pink900
}

const container = {
  width: '90%',
  margin: '0 auto'
}

class GodForm extends Component {
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
      <Paper style={styleHeader} zDepth={5}>
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
      </Paper>
    )
  }
}

GodForm.propTypes = {
  onAdd: PropTypes.func.isRequired
}

const GodCard = ({ title, description, imgSrc }) =>
  <Card style={styleCard}>
    <CardMedia overlay={<CardTitle title={title} />}>
      <img src={imgSrc} alt="" height="250" width="50" />
    </CardMedia>
    <CardText>
      {description}
    </CardText>
  </Card>

GodCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired
}

const GodCards = ({ gods }) =>
  <Paper style={styleBody} zDepth={5}>
    {gods.map(({ name, description, imgSrc }, index) =>
      <GodCard
        key={index}
        title={name}
        description={description}
        imgSrc={imgSrc}
      />
    )}
  </Paper>

GodCards.propTypes = {
  gods: PropTypes.array.isRequired
}

const Gods = ({ gods, onAdd }) =>
  <MuiThemeProvider>
    <Paper style={container}>
      <GodForm onAdd={onAdd} />
      <GodCards gods={gods} />
    </Paper>
  </MuiThemeProvider>

Gods.propTypes = {
  gods: PropTypes.array.isRequired,
  onAdd: PropTypes.func.isRequired
}
export default Gods
