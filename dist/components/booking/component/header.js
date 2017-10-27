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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = function styles(theme) {
  return {
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
  };
};

function HeaderAppBar(props) {
  var classes = props.classes;
  return _react2.default.createElement(
    'div',
    { className: classes.root },
    _react2.default.createElement(
      _AppBar2.default,
      { position: 'static', className: classes.appBar },
      _react2.default.createElement(
        _Toolbar2.default,
        null,
        _react2.default.createElement(
          _Typography2.default,
          { type: 'title', color: 'inherit', className: classes.flex },
          _react2.default.createElement('img', { src: 'https://static.gobumpr.com/img/gobumpr/logo/2.png' })
        )
      )
    )
  );
}

HeaderAppBar.propTypes = {
  classes: _propTypes2.default.object.isRequired
};

exports.default = (0, _styles.withStyles)(styles)(HeaderAppBar);