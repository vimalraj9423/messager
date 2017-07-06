import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles, createStyleSheet } from 'material-ui/styles'
import TextField from 'material-ui/TextField'
import AddIcon from 'material-ui-icons/Add'
import Button from 'material-ui/Button'

const styleSheet = createStyleSheet('TextFields', theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  input: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  },
  button: {
    margin: theme.spacing.unit
  }
}))

function insertDB(name) {
  // return fetch("/api/to/insertdata" ,data)
  return Promise.resolve('insertDB')
}

class TextFields extends Component {
  state = {
    name: ''
  };

  _handleNameChange = event => {
    this.setState({ name: event.target.value })
  };

  _handleSubmit = event => {
    const { name } = this.state
    insertDB(name)
      .then(x => console.log(`${x} - dbcall done`))
      .then(_ => {
        this.setState({ name: '' })
      })
      .then(_ => console.log(`this.state.name reset`))
  };

  render() {
    const classes = this.props.classes //didnt understand y

    return (
      <div className={classes.container}>
        <TextField
          id="name"
          label="Name"
          className={classes.input}
          value={this.state.name}
          onChange={this._handleNameChange}
          marginForm
        />
        <Button
          fab
          color="primary"
          className={classes.button}
          onClick={this._handleSubmit}
          // onClick={() => insertDB(this.state.name)} //bigggg confusion: ()=> with and without
        >
          <AddIcon />
        </Button>
      </div>
    )
  }
}

TextFields.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styleSheet)(TextFields)