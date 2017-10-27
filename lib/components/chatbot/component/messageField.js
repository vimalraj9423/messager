import React from 'react'
import ReactDOM from 'react-dom'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'
import { withStyles } from 'material-ui/styles'
import Grid from 'material-ui/Grid'
import PropTypes from 'prop-types'
import TextField from 'material-ui/TextField'
import Paper from 'material-ui/Paper'
import Typography from 'material-ui/Typography'
import ArrowDropDownIcon from 'material-ui-icons/ArrowDropDown'
import AccountCircleIcon from 'material-ui-icons/AccountCircle'
import InboxIcon from 'material-ui-icons/Inbox'
import classNames from 'classnames'
import Avatar from 'material-ui/Avatar'
import PhoneIcon from 'material-ui-icons/Phone'
const styles = theme => ({
  root: {
    width: '100%',
    width: 'calc(100% - 323px)',
    float: 'right',
    background:
      'url(https://web.freshchat.com/assets/images/pattern_agent_2-31032ee7c45d4e01cffc497de57e3168.png) #f7fcff',
    backgroundSize: '200px 200px',
    margin: 0
  },
  MessageInputField: {
    marginTop: 0
  },
  clientPaper: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3,
    width: '43%',
    borderRadius: '6px',
    float: 'left',
    marginLeft: 19,
    background: '#44aee3',
    wordWrap: 'break-word'
  }),
  leftIconPaper: {
    width: '49px',
    float: 'left',
    textAlign: 'center',
    borderRadius: '25px',
    marginTop: '24px',
    marginBottom: '7px',
    marginLeft: '3px'
  },
  rightIconPaper: {
    width: '49px',
    float: 'right',
    textAlign: 'center',
    borderRadius: '45px',
    marginTop: '24px',
    marginBottom: '7px',
    marginRight: 10,
    background: '#121212e6',
    color: '#e09526',
    fontWeight: '900',
    border: '4px solid'
  },
  rightClientPaper: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3,
    width: '43%',
    float: 'right',
    borderRadius: '6px',
    marginRight: '19px',
    marginBottom: 10,
    wordWrap: 'break-word'
  }),
  ddd: {
    height: 'auto',
    overflow: 'auto'
  },
  MessageTextField: {
    position: 'relative',
    height: 'calc(100vh - 136px)',
    overflow: 'hidden',
    overflowY: 'auto'
  },
  UserDetails: {
    height: 'calc(100vh - 155px)',
    margin: 11,
    padding: 8,
    background: '#e4e7e880',
    border: '1px solid white',
    borderRadius: 20
  },
  bottomArrow: {
    bottom: 55,
    float: 'right',
    marginRight: 26,
    borderRadius: 31,
    color: 'brown',
    position: 'absolute',
    background: ' #2196f3',
    right: 2
  },
  hiddenClass: {
    display: 'none'
  },
  CustomerContent: {
    marginTop: 20,
    overflow: 'hidden',
    overflowY: 'scroll',
    paddingLeft: 19,
    minHeight: '38%',
    maxHeight: 'calc(100% - 102px)',
    height: 'auto'
  },
  customerDetailsAvator: {},
  iconSize: {
    fontSize: '6px !important',
    height: 11,
    margin: 0
  },
  typePage: {
    wordWrap: 'break-word',
    fontSize: 12
  }
})

class MessageField extends React.Component {
  state = {
    clientId: null,
    messages: []
  };
  constructor(props) {
    super(props)
  }
  componentWillReceiveProps(newProps) {
    if (newProps.clientId) {
      fetch('/chat/messageList/' + newProps.clientId)
        .then(result => result.json())
        .then(data => {
          console.log(data)
          data.forEach(function(element) {
            if (element.Cust2User == 1) {
              element.message = element.message.substr(
                element.message.indexOf(':') + 1,
                element.message.length
              )
            }
          })
          var tempState = Object.assign({}, this.state)
          tempState.messages = data
          this.setState(tempState)
        })
    }
  }
  render() {
    const Classes = this.props.classes
    return (
      <Grid container className={Classes.root}>
        <Grid item xs={8} sm={8}>
          <MessagesView
            classes={Classes}
            messages={this.state.messages}
            clientId={this.props.clientId}
          />
        </Grid>
        <Grid item xs={4} sm={4}>
          <CustomerDetails
            classes={Classes}
            userDetails={this.props.userDetails}
          />
        </Grid>
      </Grid>
    )
  }
}

class MessagesView extends React.Component {
  state = {
    clientId: null,
    messages: [],
    isBottom: false,
    inputMessage: ''
  };
  isBottom = false;
  newProps = false;
  speed = 0;
  constructor(props) {
    super(props)
    this.scrollToBottom = this.scrollToBottom.bind(this)
    this.handleScroll = this.handleScroll.bind(this)
    this.focusTextInput = this.focusTextInput.bind(this)
    this.updateMessage = this.updateMessage.bind(this)
    this.scrollDowm = this.scrollDowm.bind(this)
  }
  scrollToBottom = () => {
    const messagesContainer = ReactDOM.findDOMNode(this.messagesContainer)
    messagesContainer.scrollTop = messagesContainer.scrollHeight
  };
  componentWillReceiveProps(newProps) {
    var tempState = Object.assign({}, this.state)
    tempState.messages = newProps.messages
    this.setState(tempState, this.scrollToBottom)
    this.messageInput.focus()
  }
  componentDidUpdate() {}
  updateMessage() {
    if (this.state.inputMessage) {
      var messages = Object.assign([], this.state.messages)
      var data = {
        Cust2User: 1,
        message: this.state.inputMessage,
        uid: this.props.clientId
      }
      messages.push(data)
      this.setState(
        { messages: messages, inputMessage: '' },
        this.scrollToBottom
      )
      this.messageInput.value = ''
      fetch('/chat/message/update', {
        method: 'POST',
        headers: {
          Accept: 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ data: data })
      })
        .then(result => result.json())
        .then(result => {
          console.log(result)
        })
    }
  }
  scrollDowmFn = () => {
    ReactDOM.findDOMNode(this.messagesContainer)
    if (
      ReactDOM.findDOMNode(this.messagesContainer).scrollTop +
        ReactDOM.findDOMNode(this.messagesContainer).offsetHeight !=
      ReactDOM.findDOMNode(this.messagesContainer).scrollHeight
    ) {
      this.messagesContainer.scrollTop =
        this.messagesContainer.scrollTop + this.speed
      this.speed = this.speed + 5
      setTimeout(this.scrollDowmFn, 10)
    }
  };
  scrollDowm = () => {
    this.speed = 15
    this.scrollDowmFn()
  };
  componentDidMount() {
    ReactDOM.findDOMNode(this.messagesContainer).addEventListener(
      'scroll',
      this.handleScroll
    )
  }
  componentWillUnmount() {
    ReactDOM.findDOMNode(this.messagesContainer).removeEventListener(
      'scroll',
      this.handleScroll
    )
  }
  componentWillUpdate(nextProps, nextState) {}

  focusTextInput() {
    // Explicitly focus the text input using the raw DOM API
    // console.log(ReactDOM.findDOMNode(this.textInput))
  }

  handleScroll = event => {
    var TotalHeight =
      ReactDOM.findDOMNode(this.messagesContainer).scrollHeight - 20
    var currentHeight =
      event.currentTarget.scrollTop + event.currentTarget.offsetHeight

    if (currentHeight < TotalHeight) {
      if (this.isBottom) {
        this.isBottom = false
        setTimeout(() => {
          this.setState({ isBottom: false })
        }, 300)
        console.log('top')
      }
    } else {
      if (!this.isBottom) {
        this.isBottom = true
        var message = Object.assign([], this.state.messages)
        var data = {
          Cust2User: 0,
          message: 'vimal',
          uid: this.state.clientId
        }
        message.push(data)
        setTimeout(() => {
          this.setState({ isBottom: true })
        }, 300)
      }
    }
  };
  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    })
  };
  render() {
    const relativeC = {
      position: 'relative'
    }
    const Classes = this.props.classes
    return (
      <div
        className={classNames(
          !this.state.messages.length > 0 && Classes.hiddenClass
        )}
        style={relativeC}
      >
        <div
          className={Classes.MessageTextField}
          ref={el => {
            this.messagesContainer = el
          }}
        >
          {this.state.messages.map((value, key) => (
            <div key={key} className={Classes.ddd}>
              {value.Cust2User == 0 ? (
                <div>
                  <Paper className={Classes.leftIconPaper}>
                    <p>N</p>
                  </Paper>
                  <Paper className={Classes.clientPaper} elevation={4}>
                    <Typography
                      type="body1"
                      component="p"
                      style={{ color: 'white' }}
                    >
                      {value.message}
                    </Typography>
                  </Paper>
                </div>
              ) : (
                <div className={Classes.ddd}>
                  <Paper className={Classes.rightIconPaper}>
                    <p>GB</p>
                  </Paper>
                  <Paper className={Classes.rightClientPaper} elevation={4}>
                    {/* <Typography type="headline" component="h3">
                            This is a sheet of paper.
                            </Typography> */}
                    <Typography type="body1" component="p">
                      {value.message}
                    </Typography>
                  </Paper>
                </div>
              )}
            </div>
          ))}
        </div>
        <Paper
          className={classNames(
            Classes.bottomArrow,
            this.isBottom && Classes.hiddenClass
          )}
          elevation={4}
        >
          {' '}
          <div onClick={() => this.scrollDowm(15)}>
            <ArrowDropDownIcon />{' '}
          </div>
        </Paper>
        <div
          ref={input => {
            this.textInput = input
          }}
        >
          <TextField
            className={Classes.MessageInputField}
            id="full-width"
            value={this.state.inputMessage}
            placeholder="create messages"
            multiline
            fullWidth
            autoFocus
            onKeyPress={ev => {
              console.log(`Pressed keyCode ${ev.key}`)
              if (ev.key === 'Enter') {
                this.updateMessage()
                ev.preventDefault()
              }
            }}
            onChange={this.handleChange('inputMessage')}
            inputRef={el => {
              this.messageInput = el
            }}
            margin="normal"
          />
        </div>
      </div>
    )
  }
}

class CustomerDetails extends React.Component {
  mappingData = {
    gender: {
      displayName: 'Gender',
      addContent: ''
    },
    City: {
      displayName: 'City',
      addContent: ''
    },
    Locality_Home: {
      displayName: 'Locality Home',
      addContent: ''
    },
    Last_service_date: {
      displayName: 'Last Service Date',
      addContent: ''
    },
    Follow_up_date: {
      displayName: 'Follow up date',
      addContent: ''
    },
    Last_called_on: {
      displayName: 'Last called on',
      addContent: ''
    }
  };
  state = {
    userDetails: []
  };
  constructor(props) {
    super(props)
  }

  componentWillReceiveProps(newProps) {
    var userDetails = []
    Object.keys(this.mappingData).forEach(element => {
      var object = {
        title: this.mappingData[element].displayName,
        data: newProps.userDetails.userDetails[element]
      }
      userDetails.push(object)
    })
    this.setState({ userDetails: userDetails })
  }
  render() {
    console.log(this.props.userDetails.userDetails)
    return (
      <Paper
        className={classNames(
          this.props.classes.UserDetails,
          Object.keys(this.props.userDetails.userDetails).length == 0 &&
            this.props.classes.hiddenClass
        )}
      >
        <div>
          <Grid container>
            <Grid item xs={2}>
              <Avatar>
                <AccountCircleIcon />
              </Avatar>
            </Grid>
            <Grid item xs={10}>
              <Typography
                type="headline"
                gutterBottom
                style={{ fontSize: '18px' }}
              >
                {this.props.userDetails.userDetails.name}
              </Typography>
              <div style={{ fontSize: '11px' }}>
                <PhoneIcon className={this.props.classes.iconSize} />
                {this.props.userDetails.userDetails.mobile_number}
                <br />
                <InboxIcon className={this.props.classes.iconSize} />
                {this.props.userDetails.userDetails.email_id}
              </div>
            </Grid>
          </Grid>
        </div>
        <Grid container className={this.props.classes.CustomerContent}>
          {this.state.userDetails.map((value, key) => (
            <Grid container key={key} style={{ height: 10 }}>
              <Grid item xs={6}>
                <p style={{ fontSize: 12 }}>
                  {value.title}
                  <span style={{ float: 'right' }}> :</span>
                </p>
              </Grid>
              <Grid item xs={6}>
                <p
                  className={this.props.classes.typePage}
                  style={{ fontSize: 10 }}
                >
                  {value.data}
                </p>
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Paper>
    )
  }
}
MessageField.propTypes = {
  classes: PropTypes.object.isRequired
}
export default withStyles(styles)(MessageField)
