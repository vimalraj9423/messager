import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import List, {
  ListItem,
  ListItemSecondaryAction,
  ListItemText
} from 'material-ui/List'
import Checkbox from 'material-ui/Checkbox'
import Avatar from 'material-ui/Avatar'

import Divider from 'material-ui/Divider'
//components

const drawerWidth = 200
const styles = theme => ({
  root: {
    width: '100%',
    height: '100%',
    maxWidth: 321,
    float: 'left',
    background: theme.palette.background.paper,
    height: 'calc(100vh - 65px)',
    overflow: 'hidden',
    overflowY: 'scroll'
  },
  textList: {
    display: 'inline-block',
    width: 302,
    whiteSpace: 'nowrap',
    overflow: 'hidden !important',
    textOverflow: 'ellipsis'
  }
})

class UserList extends React.Component {
  state = {
    checked: [1],
    userlist: []
  };
  constructor(props) {
    super(props)
  }
  handleToggle = value => () => {
    const { checked } = this.state
    const currentIndex = checked.indexOf(value)
    const newChecked = [...checked]

    if (currentIndex === -1) {
      newChecked.push(value)
    } else {
      newChecked.splice(currentIndex, 1)
    }

    this.setState({
      checked: newChecked
    })
  };
  FirstLast = name => {
    if (name) {
      return ''
    }
    var data = name.split(' ')
    var output = ''
    data.forEach(element => {
      output = output + element.length > 0 ? element[0] : ''
    })
    return output
  };
  render() {
    const classes = this.props.classes

    return (
      <div className={classes.root}>
        <List>
          {this.props.userlist.map((value, key) => (
            <div
              key={key}
              onClick={() => this.props.setClientId(value.uid)}
              className={classes.textList}
            >
              <ListItem dense button className={classes.listItem}>
                <Avatar style={{ color: 'white' }}>
                  {value.name ? value.name[0] : 'null'}
                </Avatar>
                <ListItemText
                  primary={`${value.name}`}
                  secondary={`${value.message}`}
                />
                <ListItemSecondaryAction>
                  <div
                    style={{
                      width: 23,
                      background: 'aqua',
                      textAlign: 'center',
                      borderRadius: 9
                    }}
                  >
                    {' '}
                    2
                  </div>
                </ListItemSecondaryAction>
              </ListItem>
              <Divider />
            </div>
          ))}
        </List>
      </div>
    )
  }
}

UserList.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(UserList)
