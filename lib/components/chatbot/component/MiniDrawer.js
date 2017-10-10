import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import classNames from 'classnames'
import Drawer from 'material-ui/Drawer'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List'
import InboxIcon from 'material-ui-icons/Inbox'
import DraftsIcon from 'material-ui-icons/Drafts'
import Typography from 'material-ui/Typography'
import Divider from 'material-ui/Divider'
import IconButton from 'material-ui/IconButton'
import MenuIcon from 'material-ui-icons/Menu'
import ChevronLeftIcon from 'material-ui-icons/ChevronLeft'
import UserList from './userList'
import MessageField from './messageField'
import 'isomorphic-fetch'
const drawerWidth = 200
const styles = theme => ({
  root: {
    width: '100%'
    // marginTop: theme.spacing.unit * 3,
    // zIndex: 1,
  },
  appFrame: {
    position: 'relative',
    display: 'flex',
    width: '100%',
    height: '100%'
  },
  appBar: {
    position: 'absolute',
    zIndex: theme.zIndex.navDrawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36
  },
  hide: {
    display: 'none'
  },
  drawerPaper: {
    position: 'relative',
    height: '100%',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerPaperClose: {
    width: 60,
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  drawerInner: {
    // Make the items inside not wrap when transitioning:
    width: drawerWidth
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar
  },
  content: {
    width: '100%',
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: 0,
    height: 'calc(100% - 56px)',
    marginTop: 56,
    [theme.breakpoints.up('sm')]: {
      height: 'calc(100% - 64px)',
      marginTop: 64
    }
  }
})
const d = {
  width: 100,
  float: 'left'
}
class MiniDrawer extends React.Component {
  state = {
    open: false,
    data: [],
    clickedClientID: null
  };
  handleDrawerOpen = () => {
    console.log(this)
    console.log(this.state.open)
    this.setState({ open: true, data: [] })
    console.log(this.state.open)
  };

  handleDrawerClose = () => {
    var data
    data = Object.assign({}, this.state)
    data.open = false
    this.setState(data)
  };
  test = () => {
    console.log('value')
    console.log(this.state)
    fetch(' /chat/userList')
      .then(result => result.json())
      .then(data => {
        var previousState
        previousState = Object.assign({}, this.state)
        data.forEach(function(element) {
          if (element.Cust2User == 1) {
            element.message = element.message.substr(
              element.message.indexOf(':') + 1,
              element.message.length
            )
          }
        })
        previousState.data = data
        this.setState(previousState)
        console.log(data)
      })
  };

  componentDidMount() {
    this.test()
  }

  setClientId = clientID => {
    var previousState
    previousState = Object.assign({}, this.state)
    previousState.clickedClientID = clientID
    this.setState(previousState)
    console.log(clientID)
  };

  render() {
    const classes = this.props.classes
    const UserData = {
      userDetails: {}
    }
    this.state.data.forEach(user => {
      if (user.uid == this.state.clickedClientID) {
        UserData.userDetails = user
      }
    })
    return (
      <div className={classes.root}>
        <div className={classes.appFrame}>
          <AppBar
            className={classNames(
              classes.appBar,
              this.state.open && classes.appBarShift
            )}
            color="primary"
          >
            <Toolbar disableGutters={!this.state.open}>
              <IconButton
                color="contrast"
                aria-label="open drawer"
                onClick={this.handleDrawerOpen}
                className={classNames(
                  classes.menuButton,
                  this.state.open && classes.hide
                )}
              >
                <MenuIcon />
              </IconButton>
              <Typography type="title" color="inherit" noWrap>
                go bumpr
              </Typography>
            </Toolbar>
          </AppBar>
          <Drawer
            type="permanent"
            classes={{
              paper: classNames(
                classes.drawerPaper,
                !this.state.open && classes.drawerPaperClose
              )
            }}
            open={this.state.open}
          >
            <div className={classes.drawerInner}>
              <div className={classes.drawerHeader}>
                <IconButton onClick={this.handleDrawerClose}>
                  <ChevronLeftIcon style={{ color: 'white' }} />
                </IconButton>
              </div>
              <Divider />
              <List className={classes.list}>
                <ListItem button>
                  <ListItemIcon>
                    <InboxIcon />
                  </ListItemIcon>
                  <ListItemText primary="Inbox" />
                </ListItem>
                <ListItem button>
                  <ListItemIcon>
                    <DraftsIcon />
                  </ListItemIcon>
                  <ListItemText primary="Drafts" />
                </ListItem>
              </List>
              <Divider />
              <List className={classes.list} />
            </div>
          </Drawer>
          <main className={classes.content}>
            <UserList
              userlist={this.state.data}
              setClientId={this.setClientId}
            />
            <MessageField
              clientId={this.state.clickedClientID}
              userDetails={UserData}
            />
          </main>
        </div>
      </div>
    )
  }
}

MiniDrawer.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(MiniDrawer)
