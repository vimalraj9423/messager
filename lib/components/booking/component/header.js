import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import IconButton from 'material-ui/IconButton'
import MenuIcon from 'material-ui-icons/Menu'

const styles = theme => ({
  root: {
    margin: 0,
    width: '100%'
  },
  flex: {
    flex: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  appBar: {
    background: '#ffffff'
  }
})

function HeaderAppBar(props) {
  const classes = props.classes
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Typography type="title" color="inherit" className={classes.flex}>
            <img src="https://static.gobumpr.com/img/gobumpr/logo/2.png" />
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}

HeaderAppBar.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(HeaderAppBar)
