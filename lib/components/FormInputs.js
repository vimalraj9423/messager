import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles, createStyleSheet } from 'material-ui/styles'
import TextField from 'material-ui/TextField'
import AddIcon from 'material-ui-icons/Add'
import Button from 'material-ui/Button'
import { CircularProgress } from 'material-ui/Progress'

const styleSheet = createStyleSheet('TextFields', theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  wrapper: {
    position: 'relative'
  },
  input: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  },
  button: {
    margin: theme.spacing.unit
  },
  successButton: {
    backgroundColor: 'blue',
    '&.hover': {
      backgroundColor: 'blue'
    }
  },
  progress: {
    color: 'green',
    position: 'absolute',
    top: -2,
    left: -2
  }
}))

function insertDB(name) {
  // return fetch("/api/to/insertdata" ,data)
  return fetch('/insertForm', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: name
    })
  })
    .then(function(response) {
      return response.json()
    })
    .then(function(json) {
      console.log(json)
      return json
    })
}

class TextFields extends Component {
  state = {
    name: '',
    loading: false,
    success: false
  };

  _handleNameChange = event => {
    this.setState({ name: event.target.value })
  };

  _handleSubmit = event => {
    const { name } = this.state
    this.setState({ loading: true, success: false })
    insertDB(name)
      .then(() => {
        this.setState({
          name: '',
          disabled: true,
          loading: false,
          success: true
        })
      })
      .then(_ => console.log(`this.state.name reset`))
  };

  render() {
    const classes = this.props.classes //didnt understand y
    const { loading, success } = this.state
    let buttonClass = ''

    if (success) {
      buttonClass = classes.successButton
    }

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
        <div className={classes.wrapper}>
          <Button
            fab
            disabled={this.state.disabled}
            id="button"
            color="primary"
            className={buttonClass}
            onClick={this._handleSubmit}
            // onClick={() => insertDB(this.state.name)} //bigggg confusion: ()=> with and without
          >
            <AddIcon />
          </Button>
          {loading &&
            <CircularProgress size={60} className={classes.progress} />}
        </div>
      </div>
    )
  }
}

TextFields.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styleSheet)(TextFields)
