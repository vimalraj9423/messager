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

// const initState = {
//   name: ''
// }

function insertDB(newVal) {
  alert(newVal)
}

class TextFields extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: ''
    }
    // this.onChange = this.onChange.bind(this)
    // this.onClick = this.handleClick.bind(this)
  }

  render() {
    const classes = this.props.classes //didnt understand y

    return (
      <div className={classes.container}>
        <TextField
          id="name"
          label="Name"
          className={classes.input}
          value={this.state.name}
          onChange={event => {
            this.setState({ name: event.target.value })
          }}
          marginForm
        />
        <Button
          fab
          color="primary"
          className={classes.button}
          onClick={insertDB}
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
