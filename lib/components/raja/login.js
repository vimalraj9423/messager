import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import IconButton from 'material-ui/IconButton'
import MenuIcon from 'material-ui-icons/Menu'
import Icon from 'material-ui/Icon'
import { red, purple } from 'material-ui/colors'
import Checkbox from 'material-ui/Checkbox'
const WrappedIcon = props => <Icon {...props} />
WrappedIcon.muiName = 'Icon'
const styles = theme => ({
  root: {
    // marginTop: theme.spacing.unit * 3,
    width: '100%'
  },
  flex: {
    flex: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
  },
  IconButton: {
    backGround: 'yellow'
  },
  danger: {
    color: theme.status.danger
  }
})
function ButtonAppBar(props) {
  const classes = props.classes
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton className={classes.menuButton} aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography type="title" color="inherit" className={classes.flex}>
            Title
          </Typography>
          <Button color="contrast">Login</Button>
        </Toolbar>
      </AppBar>
      <Checkbox defaultChecked className={props.classes.danger}>
        {'Danger'}
      </Checkbox>
      <style>{'body { background-color: red; }'}</style>
    </div>
  )
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(ButtonAppBar)
