'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = require('material-ui/styles');

var _List = require('material-ui/List');

var _List2 = _interopRequireDefault(_List);

var _Checkbox = require('material-ui/Checkbox');

var _Checkbox2 = _interopRequireDefault(_Checkbox);

var _Avatar = require('material-ui/Avatar');

var _Avatar2 = _interopRequireDefault(_Avatar);

var _Divider = require('material-ui/Divider');

var _Divider2 = _interopRequireDefault(_Divider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//components

var drawerWidth = 200;
var styles = function styles(theme) {
  var _root;

  return {
    root: (_root = {
      width: '100%',
      height: '100%',
      maxWidth: 321,
      float: 'left',
      background: theme.palette.background.paper
    }, _defineProperty(_root, 'height', 'calc(100vh - 65px)'), _defineProperty(_root, 'overflow', 'hidden'), _defineProperty(_root, 'overflowY', 'scroll'), _root),
    textList: {
      display: 'inline-block',
      width: 302,
      whiteSpace: 'nowrap',
      overflow: 'hidden !important',
      textOverflow: 'ellipsis'
    }
  };
};

var UserList = function (_React$Component) {
  _inherits(UserList, _React$Component);

  function UserList(props) {
    _classCallCheck(this, UserList);

    var _this = _possibleConstructorReturn(this, (UserList.__proto__ || Object.getPrototypeOf(UserList)).call(this, props));

    _this.state = {
      checked: [1],
      userlist: []
    };

    _this.handleToggle = function (value) {
      return function () {
        var checked = _this.state.checked;

        var currentIndex = checked.indexOf(value);
        var newChecked = [].concat(_toConsumableArray(checked));

        if (currentIndex === -1) {
          newChecked.push(value);
        } else {
          newChecked.splice(currentIndex, 1);
        }

        _this.setState({
          checked: newChecked
        });
      };
    };

    _this.FirstLast = function (name) {
      if (name) {
        return '';
      }
      var data = name.split(' ');
      var output = '';
      data.forEach(function (element) {
        output = output + element.length > 0 ? element[0] : '';
      });
      return output;
    };

    return _this;
  }

  _createClass(UserList, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var classes = this.props.classes;

      return _react2.default.createElement(
        'div',
        { className: classes.root },
        _react2.default.createElement(
          _List2.default,
          null,
          this.props.userlist.map(function (value, key) {
            return _react2.default.createElement(
              'div',
              {
                key: key,
                onClick: function onClick() {
                  return _this2.props.setClientId(value.uid);
                },
                className: classes.textList
              },
              _react2.default.createElement(
                _List.ListItem,
                { dense: true, button: true, className: classes.listItem },
                _react2.default.createElement(
                  _Avatar2.default,
                  { style: { color: 'white' } },
                  value.name ? value.name[0] : 'null'
                ),
                _react2.default.createElement(_List.ListItemText, {
                  primary: '' + value.name,
                  secondary: '' + value.message
                }),
                _react2.default.createElement(
                  _List.ListItemSecondaryAction,
                  null,
                  _react2.default.createElement(
                    'div',
                    {
                      style: {
                        width: 23,
                        background: 'aqua',
                        textAlign: 'center',
                        borderRadius: 9
                      }
                    },
                    ' ',
                    '2'
                  )
                )
              ),
              _react2.default.createElement(_Divider2.default, null)
            );
          })
        )
      );
    }
  }]);

  return UserList;
}(_react2.default.Component);

UserList.propTypes = {
  classes: _propTypes2.default.object.isRequired
};

exports.default = (0, _styles.withStyles)(styles)(UserList);