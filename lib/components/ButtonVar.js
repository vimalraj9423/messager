import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles, createStyleSheet } from 'material-ui/styles'
import { CircularProgress } from 'material-ui/Progress'
import Button from 'material-ui/Button'
import CheckIcon from 'material-ui-icons/Check'
import SaveIcon from 'material-ui-icons/Save'

const styleSheet = createStyleSheet('LoaderButton', {
  wrapper: {
    position: 'relative'
  },
  successButton: {
    backgroundColor: 'grey',
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
})

class LoaderButton extends Component {
  state = {
    sucess: false,
    loading: false
  };
  componentWillUnmount() {
    clearTimeout(this.timer)
  }
  handleButtonClick = () => {
    if (!this.state.loading) {
      this.setState(
        {
          success: false,
          loading: true
        },
        () => {
          this.timer = setTimeout(() => {
            this.setState({
              loading: false,
              success: true
            })
          }, 2e3)
        }
      )
    }
  };
  timer = undefined;

  render() {
    const { loading, success } = this.state
    const classes = this.props.classes
    let buttonClass = ''

    if (success) {
      buttonClass = classes.successButton
    }

    return (
      <div className={classes.wrapper}>
        <Button
          fab
          color="primary"
          className={buttonClass}
          onClick={this.handleButtonClick}
        >
          {success ? <CheckIcon /> : <SaveIcon />}
        </Button>
        {loading && <CircularProgress size={60} className={classes.progress} />}
      </div>
    )
  }
}

LoaderButton.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styleSheet)(LoaderButton)
