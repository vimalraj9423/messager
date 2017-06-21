import React, { Component } from "react"
import Paper from "material-ui/Paper"
import { Card, CardHeader, CardText } from "material-ui/Card"
import FlatButton from "material-ui/FlatButton"
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"
import TextField from "material-ui/TextField"

const styleHeader = {
  height: 150,
  width: "100%",
  padding: 10,
  textAlign: "center",
  display: "inline-block"
}

const styleBody = {
  height: 500,
  width: "100%",
  textAlign: "center",
  display: "inline-block"
}

const styleCard = {
  width: 200,
  padding: 10,
  margin: 10,
  textAlign: "center",
  display: "inline-block"
}

const GodCard = ({ title, description }) =>
  <Card style={styleCard}>
    <CardHeader title={title} />
    <CardText>
      {description}
    </CardText>
  </Card>

const GodCards = ({ gods }) =>
  <Paper style={styleBody}>
    {gods.map(({ name, description }) =>
      <GodCard key={name} title={name} description={description} />
    )}
  </Paper>

class GodForm extends Component {
  constructor(props) {
    super(props)
    this.state = { name: "", description: "" }
  }

  onDescriptionChange = (event, value) => {
    this.setState({ description: value })
  }

  onNameChange = (event, value) => {
    this.setState({ name: value })
  }

  onAdd = () => {
    const { name, description } = this.state
    this.props.onAdd({ name, description })
    this.setState({ name: "", description: "" })
  }

  render() {
    return (
      <Paper style={styleHeader} zDepth={5}>
        <TextField
          hintText="Name"
          value={this.state.name}
          onChange={this.onNameChange}
        />
        <br />
        <TextField
          hintText="Description"
          value={this.state.description}
          onChange={this.onDescriptionChange}
        />
        <br />
        <FlatButton label="Add" onTouchTap={this.onAdd} />
      </Paper>
    )
  }
}

// const GodForm = ({ onAdd }) =>
// <Paper style={styleHeader} zDepth={5}>
// <TextField hintText="Name" />
// <br />
// <TextField hintText="Description" />
// <br />
// <FlatButton label="Add" onTouchTap={onAdd} />
// </Paper>

const Gods = ({ gods, onAdd }) =>
  <MuiThemeProvider>
    <div>
      <GodForm onAdd={onAdd} />
      <GodCards gods={gods} />
    </div>
  </MuiThemeProvider>

export default Gods
