'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _styles = require('material-ui/styles');

var _Grid = require('material-ui/Grid');

var _Grid2 = _interopRequireDefault(_Grid);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _TextField = require('material-ui/TextField');

var _TextField2 = _interopRequireDefault(_TextField);

var _Paper = require('material-ui/Paper');

var _Paper2 = _interopRequireDefault(_Paper);

var _Typography = require('material-ui/Typography');

var _Typography2 = _interopRequireDefault(_Typography);

var _ArrowDropDown = require('material-ui-icons/ArrowDropDown');

var _ArrowDropDown2 = _interopRequireDefault(_ArrowDropDown);

var _AccountCircle = require('material-ui-icons/AccountCircle');

var _AccountCircle2 = _interopRequireDefault(_AccountCircle);

var _Inbox = require('material-ui-icons/Inbox');

var _Inbox2 = _interopRequireDefault(_Inbox);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Avatar = require('material-ui/Avatar');

var _Avatar2 = _interopRequireDefault(_Avatar);

var _Phone = require('material-ui-icons/Phone');

var _Phone2 = _interopRequireDefault(_Phone);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = function styles(theme) {
  var _root;

  return {
    root: (_root = {
      width: '100%'
    }, _defineProperty(_root, 'width', 'calc(100% - 323px)'), _defineProperty(_root, 'float', 'right'), _defineProperty(_root, 'background', 'url(https://web.freshchat.com/assets/images/pattern_agent_2-31032ee7c45d4e01cffc497de57e3168.png) #f7fcff'), _defineProperty(_root, 'backgroundSize', '200px 200px'), _defineProperty(_root, 'margin', 0), _root),
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
      background: " #2196f3",
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
  };
};

var MessageField = function (_React$Component) {
  _inherits(MessageField, _React$Component);

  function MessageField(props) {
    _classCallCheck(this, MessageField);

    var _this = _possibleConstructorReturn(this, (MessageField.__proto__ || Object.getPrototypeOf(MessageField)).call(this, props));

    _this.state = {
      clientId: null,
      messages: []
    };
    return _this;
  }

  _createClass(MessageField, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(newProps) {
      var _this2 = this;

      if (newProps.clientId) {
        fetch('/chat/messageList/' + newProps.clientId).then(function (result) {
          return result.json();
        }).then(function (data) {
          console.log(data);
          data.forEach(function (element) {
            if (element.Cust2User == 1) {
              element.message = element.message.substr(element.message.indexOf(':') + 1, element.message.length);
            }
          });
          var tempState = Object.assign({}, _this2.state);
          tempState.messages = data;
          _this2.setState(tempState);
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var Classes = this.props.classes;
      return _react2.default.createElement(
        _Grid2.default,
        { container: true, className: Classes.root },
        _react2.default.createElement(
          _Grid2.default,
          { item: true, xs: 8, sm: 8 },
          _react2.default.createElement(MessagesView, {
            classes: Classes,
            messages: this.state.messages,
            clientId: this.props.clientId
          })
        ),
        _react2.default.createElement(
          _Grid2.default,
          { item: true, xs: 4, sm: 4 },
          _react2.default.createElement(CustomerDetails, {
            classes: Classes,
            userDetails: this.props.userDetails
          })
        )
      );
    }
  }]);

  return MessageField;
}(_react2.default.Component);

var MessagesView = function (_React$Component2) {
  _inherits(MessagesView, _React$Component2);

  function MessagesView(props) {
    _classCallCheck(this, MessagesView);

    var _this3 = _possibleConstructorReturn(this, (MessagesView.__proto__ || Object.getPrototypeOf(MessagesView)).call(this, props));

    _this3.state = {
      clientId: null,
      messages: [],
      isBottom: false,
      inputMessage: ''
    };
    _this3.isBottom = false;
    _this3.newProps = false;
    _this3.speed = 0;

    _this3.scrollToBottom = function () {
      var messagesContainer = _reactDom2.default.findDOMNode(_this3.messagesContainer);
      messagesContainer.scrollTop = messagesContainer.scrollHeight;
    };

    _this3.scrollDowmFn = function () {
      _reactDom2.default.findDOMNode(_this3.messagesContainer);
      if (_reactDom2.default.findDOMNode(_this3.messagesContainer).scrollTop + _reactDom2.default.findDOMNode(_this3.messagesContainer).offsetHeight != _reactDom2.default.findDOMNode(_this3.messagesContainer).scrollHeight) {
        _this3.messagesContainer.scrollTop = _this3.messagesContainer.scrollTop + _this3.speed;
        _this3.speed = _this3.speed + 5;
        setTimeout(_this3.scrollDowmFn, 10);
      }
    };

    _this3.scrollDowm = function () {
      _this3.speed = 15;
      _this3.scrollDowmFn();
    };

    _this3.handleScroll = function (event) {
      var TotalHeight = _reactDom2.default.findDOMNode(_this3.messagesContainer).scrollHeight - 20;
      var currentHeight = event.currentTarget.scrollTop + event.currentTarget.offsetHeight;

      if (currentHeight < TotalHeight) {
        if (_this3.isBottom) {
          _this3.isBottom = false;
          setTimeout(function () {
            _this3.setState({ isBottom: false });
          }, 300);
          console.log('top');
        }
      } else {
        if (!_this3.isBottom) {
          _this3.isBottom = true;
          var message = Object.assign([], _this3.state.messages);
          var data = {
            Cust2User: 0,
            message: 'vimal',
            uid: _this3.state.clientId
          };
          message.push(data);
          setTimeout(function () {
            _this3.setState({ isBottom: true });
          }, 300);
        }
      }
    };

    _this3.handleChange = function (name) {
      return function (event) {
        _this3.setState(_defineProperty({}, name, event.target.value));
      };
    };

    _this3.scrollToBottom = _this3.scrollToBottom.bind(_this3);
    _this3.handleScroll = _this3.handleScroll.bind(_this3);
    _this3.focusTextInput = _this3.focusTextInput.bind(_this3);
    _this3.updateMessage = _this3.updateMessage.bind(_this3);
    _this3.scrollDowm = _this3.scrollDowm.bind(_this3);
    return _this3;
  }

  _createClass(MessagesView, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(newProps) {
      var tempState = Object.assign({}, this.state);
      tempState.messages = newProps.messages;
      this.setState(tempState, this.scrollToBottom);
      this.messageInput.focus();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {}
  }, {
    key: 'updateMessage',
    value: function updateMessage() {
      if (this.state.inputMessage) {
        var messages = Object.assign([], this.state.messages);
        var data = {
          Cust2User: 1,
          message: this.state.inputMessage,
          uid: this.props.clientId
        };
        messages.push(data);
        this.setState({ messages: messages, inputMessage: '' }, this.scrollToBottom);
        this.messageInput.value = '';
        fetch('/chat/message/update', {
          method: 'POST',
          headers: {
            Accept: 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ data: data })
        }).then(function (result) {
          return result.json();
        }).then(function (result) {
          console.log(result);
        });
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      _reactDom2.default.findDOMNode(this.messagesContainer).addEventListener('scroll', this.handleScroll);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      _reactDom2.default.findDOMNode(this.messagesContainer).removeEventListener('scroll', this.handleScroll);
    }
  }, {
    key: 'componentWillUpdate',
    value: function componentWillUpdate(nextProps, nextState) {}
  }, {
    key: 'focusTextInput',
    value: function focusTextInput() {
      // Explicitly focus the text input using the raw DOM API
      // console.log(ReactDOM.findDOMNode(this.textInput))
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      var relativeC = {
        position: 'relative'
      };
      var Classes = this.props.classes;
      return _react2.default.createElement(
        'div',
        {
          className: (0, _classnames2.default)(!this.state.messages.length > 0 && Classes.hiddenClass),
          style: relativeC
        },
        _react2.default.createElement(
          'div',
          {
            className: Classes.MessageTextField,
            ref: function ref(el) {
              _this4.messagesContainer = el;
            }
          },
          this.state.messages.map(function (value, key) {
            return _react2.default.createElement(
              'div',
              { key: key, className: Classes.ddd },
              value.Cust2User == 0 ? _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                  _Paper2.default,
                  { className: Classes.leftIconPaper },
                  _react2.default.createElement(
                    'p',
                    null,
                    'N'
                  )
                ),
                _react2.default.createElement(
                  _Paper2.default,
                  { className: Classes.clientPaper, elevation: 4 },
                  _react2.default.createElement(
                    _Typography2.default,
                    {
                      type: 'body1',
                      component: 'p',
                      style: { color: 'white' }
                    },
                    value.message
                  )
                )
              ) : _react2.default.createElement(
                'div',
                { className: Classes.ddd },
                _react2.default.createElement(
                  _Paper2.default,
                  { className: Classes.rightIconPaper },
                  _react2.default.createElement(
                    'p',
                    null,
                    'GB'
                  )
                ),
                _react2.default.createElement(
                  _Paper2.default,
                  { className: Classes.rightClientPaper, elevation: 4 },
                  _react2.default.createElement(
                    _Typography2.default,
                    { type: 'body1', component: 'p' },
                    value.message
                  )
                )
              )
            );
          })
        ),
        _react2.default.createElement(
          _Paper2.default,
          {
            className: (0, _classnames2.default)(Classes.bottomArrow, this.isBottom && Classes.hiddenClass),
            elevation: 4
          },
          ' ',
          _react2.default.createElement(
            'div',
            { onClick: function onClick() {
                return _this4.scrollDowm(15);
              } },
            _react2.default.createElement(_ArrowDropDown2.default, null),
            ' '
          )
        ),
        _react2.default.createElement(
          'div',
          {
            ref: function ref(input) {
              _this4.textInput = input;
            }
          },
          _react2.default.createElement(_TextField2.default, {
            className: Classes.MessageInputField,
            id: 'full-width',
            value: this.state.inputMessage,
            placeholder: 'create messages',
            multiline: true,
            fullWidth: true,
            autoFocus: true,
            onKeyPress: function onKeyPress(ev) {
              console.log('Pressed keyCode ' + ev.key);
              if (ev.key === 'Enter') {
                _this4.updateMessage();
                ev.preventDefault();
              }
            },
            onChange: this.handleChange('inputMessage'),
            inputRef: function inputRef(el) {
              _this4.messageInput = el;
            },
            margin: 'normal'
          })
        )
      );
    }
  }]);

  return MessagesView;
}(_react2.default.Component);

var CustomerDetails = function (_React$Component3) {
  _inherits(CustomerDetails, _React$Component3);

  function CustomerDetails(props) {
    _classCallCheck(this, CustomerDetails);

    var _this5 = _possibleConstructorReturn(this, (CustomerDetails.__proto__ || Object.getPrototypeOf(CustomerDetails)).call(this, props));

    _this5.mappingData = {
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
    _this5.state = {
      userDetails: []
    };
    return _this5;
  }

  _createClass(CustomerDetails, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(newProps) {
      var _this6 = this;

      var userDetails = [];
      Object.keys(this.mappingData).forEach(function (element) {
        var object = {
          title: _this6.mappingData[element].displayName,
          data: newProps.userDetails.userDetails[element]
        };
        userDetails.push(object);
      });
      this.setState({ userDetails: userDetails });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this7 = this;

      console.log(this.props.userDetails.userDetails);
      return _react2.default.createElement(
        _Paper2.default,
        {
          className: (0, _classnames2.default)(this.props.classes.UserDetails, Object.keys(this.props.userDetails.userDetails).length == 0 && this.props.classes.hiddenClass)
        },
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            _Grid2.default,
            { container: true },
            _react2.default.createElement(
              _Grid2.default,
              { item: true, xs: 2 },
              _react2.default.createElement(
                _Avatar2.default,
                null,
                _react2.default.createElement(_AccountCircle2.default, null)
              )
            ),
            _react2.default.createElement(
              _Grid2.default,
              { item: true, xs: 10 },
              _react2.default.createElement(
                _Typography2.default,
                {
                  type: 'headline',
                  gutterBottom: true,
                  style: { fontSize: '18px' }
                },
                this.props.userDetails.userDetails.name
              ),
              _react2.default.createElement(
                'div',
                { style: { fontSize: '11px' } },
                _react2.default.createElement(_Phone2.default, { className: this.props.classes.iconSize }),
                this.props.userDetails.userDetails.mobile_number,
                _react2.default.createElement('br', null),
                _react2.default.createElement(_Inbox2.default, { className: this.props.classes.iconSize }),
                this.props.userDetails.userDetails.email_id
              )
            )
          )
        ),
        _react2.default.createElement(
          _Grid2.default,
          { container: true, className: this.props.classes.CustomerContent },
          this.state.userDetails.map(function (value, key) {
            return _react2.default.createElement(
              _Grid2.default,
              { container: true, key: key, style: { height: 10 } },
              _react2.default.createElement(
                _Grid2.default,
                { item: true, xs: 6 },
                _react2.default.createElement(
                  'p',
                  { style: { fontSize: 12 } },
                  value.title,
                  _react2.default.createElement(
                    'span',
                    { style: { float: 'right' } },
                    ' :'
                  )
                )
              ),
              _react2.default.createElement(
                _Grid2.default,
                { item: true, xs: 6 },
                _react2.default.createElement(
                  'p',
                  {
                    className: _this7.props.classes.typePage,
                    style: { fontSize: 10 }
                  },
                  value.data
                )
              )
            );
          })
        )
      );
    }
  }]);

  return CustomerDetails;
}(_react2.default.Component);

MessageField.propTypes = {
  classes: _propTypes2.default.object.isRequired
};
exports.default = (0, _styles.withStyles)(styles)(MessageField);