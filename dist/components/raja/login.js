'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = require('material-ui/styles');

var _AppBar = require('material-ui/AppBar');

var _AppBar2 = _interopRequireDefault(_AppBar);

var _Toolbar = require('material-ui/Toolbar');

var _Toolbar2 = _interopRequireDefault(_Toolbar);

var _Typography = require('material-ui/Typography');

var _Typography2 = _interopRequireDefault(_Typography);

var _Button = require('material-ui/Button');

var _Button2 = _interopRequireDefault(_Button);

var _IconButton = require('material-ui/IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _Menu = require('material-ui-icons/Menu');

var _Menu2 = _interopRequireDefault(_Menu);

var _Icon = require('material-ui/Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _colors = require('material-ui/colors');

var _Checkbox = require('material-ui/Checkbox');

var _Checkbox2 = _interopRequireDefault(_Checkbox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var WrappedIcon = function WrappedIcon(props) {
  return _react2.default.createElement(_Icon2.default, props);
};
WrappedIcon.muiName = 'Icon';
var styles = function styles(theme) {
  return {
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
  };
};
function ButtonAppBar(props) {
  var classes = props.classes;
  return _react2.default.createElement(
    'div',
    { className: classes.root },
    _react2.default.createElement(
      _AppBar2.default,
      { position: 'static' },
      _react2.default.createElement(
        _Toolbar2.default,
        null,
        _react2.default.createElement(
          _IconButton2.default,
          { className: classes.menuButton, 'aria-label': 'Menu' },
          _react2.default.createElement(_Menu2.default, null)
        ),
        _react2.default.createElement(
          _Typography2.default,
          { type: 'title', color: 'inherit', className: classes.flex },
          'Title'
        ),
        _react2.default.createElement(
          _Button2.default,
          { color: 'contrast' },
          'Login'
        )
      )
    ),
    _react2.default.createElement(
      _Checkbox2.default,
      { defaultChecked: true, className: props.classes.danger },
      'Danger'
    ),
    _react2.default.createElement(
      'style',
      null,
      'body { background-color: red; }'
    )
  );
}

ButtonAppBar.propTypes = {
  classes: _propTypes2.default.object.isRequired
};

exports.default = (0, _styles.withStyles)(styles)(ButtonAppBar);