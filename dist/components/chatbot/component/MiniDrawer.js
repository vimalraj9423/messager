'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = require('material-ui/styles');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Drawer = require('material-ui/Drawer');

var _Drawer2 = _interopRequireDefault(_Drawer);

var _AppBar = require('material-ui/AppBar');

var _AppBar2 = _interopRequireDefault(_AppBar);

var _Toolbar = require('material-ui/Toolbar');

var _Toolbar2 = _interopRequireDefault(_Toolbar);

var _List = require('material-ui/List');

var _List2 = _interopRequireDefault(_List);

var _Inbox = require('material-ui-icons/Inbox');

var _Inbox2 = _interopRequireDefault(_Inbox);

var _Drafts = require('material-ui-icons/Drafts');

var _Drafts2 = _interopRequireDefault(_Drafts);

var _Typography = require('material-ui/Typography');

var _Typography2 = _interopRequireDefault(_Typography);

var _Divider = require('material-ui/Divider');

var _Divider2 = _interopRequireDefault(_Divider);

var _IconButton = require('material-ui/IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _Menu = require('material-ui-icons/Menu');

var _Menu2 = _interopRequireDefault(_Menu);

var _ChevronLeft = require('material-ui-icons/ChevronLeft');

var _ChevronLeft2 = _interopRequireDefault(_ChevronLeft);

var _userList = require('./userList');

var _userList2 = _interopRequireDefault(_userList);

var _messageField = require('./messageField');

var _messageField2 = _interopRequireDefault(_messageField);

require('isomorphic-fetch');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var drawerWidth = 200;
var styles = function styles(theme) {
  return {
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
      width: 'calc(100% - ' + drawerWidth + 'px)',
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
    drawerHeader: _extends({
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: '0 8px'
    }, theme.mixins.toolbar),
    content: _defineProperty({
      width: '100%',
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
      padding: 0,
      height: 'calc(100% - 56px)',
      marginTop: 56
    }, theme.breakpoints.up('sm'), {
      height: 'calc(100% - 64px)',
      marginTop: 64
    })
  };
};
var d = {
  width: 100,
  float: 'left'
};

var MiniDrawer = function (_React$Component) {
  _inherits(MiniDrawer, _React$Component);

  function MiniDrawer() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, MiniDrawer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = MiniDrawer.__proto__ || Object.getPrototypeOf(MiniDrawer)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      open: false,
      data: [],
      clickedClientID: null
    }, _this.handleDrawerOpen = function () {
      console.log(_this);
      console.log(_this.state.open);
      _this.setState({ open: true, data: [] });
      console.log(_this.state.open);
    }, _this.handleDrawerClose = function () {
      var data;
      data = Object.assign({}, _this.state);
      data.open = false;
      _this.setState(data);
    }, _this.test = function () {
      console.log('value');
      console.log(_this.state);
      fetch(' /chat/userList').then(function (result) {
        return result.json();
      }).then(function (data) {
        var previousState;
        previousState = Object.assign({}, _this.state);
        data.forEach(function (element) {
          if (element.Cust2User == 1) {
            element.message = element.message.substr(element.message.indexOf(':') + 1, element.message.length);
          }
        });
        previousState.data = data;
        _this.setState(previousState);
        console.log(data);
      });
    }, _this.setClientId = function (clientID) {
      var previousState;
      previousState = Object.assign({}, _this.state);
      previousState.clickedClientID = clientID;
      _this.setState(previousState);
      console.log(clientID);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(MiniDrawer, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.test();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var classes = this.props.classes;
      var UserData = {
        userDetails: {}
      };
      this.state.data.forEach(function (user) {
        if (user.uid == _this2.state.clickedClientID) {
          UserData.userDetails = user;
        }
      });
      return _react2.default.createElement(
        'div',
        { className: classes.root },
        _react2.default.createElement(
          'div',
          { className: classes.appFrame },
          _react2.default.createElement(
            _AppBar2.default,
            {
              className: (0, _classnames2.default)(classes.appBar, this.state.open && classes.appBarShift),
              color: 'primary'
            },
            _react2.default.createElement(
              _Toolbar2.default,
              { disableGutters: !this.state.open },
              _react2.default.createElement(
                _IconButton2.default,
                {
                  color: 'contrast',
                  'aria-label': 'open drawer',
                  onClick: this.handleDrawerOpen,
                  className: (0, _classnames2.default)(classes.menuButton, this.state.open && classes.hide)
                },
                _react2.default.createElement(_Menu2.default, null)
              ),
              _react2.default.createElement(
                _Typography2.default,
                { type: 'title', color: 'inherit', noWrap: true },
                'messenger'
              )
            )
          ),
          _react2.default.createElement(
            _Drawer2.default,
            {
              type: 'permanent',
              classes: {
                paper: (0, _classnames2.default)(classes.drawerPaper, !this.state.open && classes.drawerPaperClose)
              },
              open: this.state.open
            },
            _react2.default.createElement(
              'div',
              { className: classes.drawerInner },
              _react2.default.createElement(
                'div',
                { className: classes.drawerHeader },
                _react2.default.createElement(
                  _IconButton2.default,
                  { onClick: this.handleDrawerClose },
                  _react2.default.createElement(_ChevronLeft2.default, { style: { color: 'white' } })
                )
              ),
              _react2.default.createElement(_Divider2.default, null),
              _react2.default.createElement(
                _List2.default,
                { className: classes.list },
                _react2.default.createElement(
                  _List.ListItem,
                  { button: true },
                  _react2.default.createElement(
                    _List.ListItemIcon,
                    null,
                    _react2.default.createElement(_Inbox2.default, null)
                  ),
                  _react2.default.createElement(_List.ListItemText, { primary: 'Inbox' })
                ),
                _react2.default.createElement(
                  _List.ListItem,
                  { button: true },
                  _react2.default.createElement(
                    _List.ListItemIcon,
                    null,
                    _react2.default.createElement(_Drafts2.default, null)
                  ),
                  _react2.default.createElement(_List.ListItemText, { primary: 'Drafts' })
                )
              ),
              _react2.default.createElement(_Divider2.default, null),
              _react2.default.createElement(_List2.default, { className: classes.list })
            )
          ),
          _react2.default.createElement(
            'main',
            { className: classes.content },
            _react2.default.createElement(_userList2.default, {
              userlist: this.state.data,
              setClientId: this.setClientId
            }),
            _react2.default.createElement(_messageField2.default, {
              clientId: this.state.clickedClientID,
              userDetails: UserData
            })
          )
        )
      );
    }
  }]);

  return MiniDrawer;
}(_react2.default.Component);

MiniDrawer.propTypes = {
  classes: _propTypes2.default.object.isRequired
};

exports.default = (0, _styles.withStyles)(styles)(MiniDrawer);