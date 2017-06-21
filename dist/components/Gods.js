"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Paper = require("material-ui/Paper");

var _Paper2 = _interopRequireDefault(_Paper);

var _Card = require("material-ui/Card");

var _FlatButton = require("material-ui/FlatButton");

var _FlatButton2 = _interopRequireDefault(_FlatButton);

var _MuiThemeProvider = require("material-ui/styles/MuiThemeProvider");

var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

var _TextField = require("material-ui/TextField");

var _TextField2 = _interopRequireDefault(_TextField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styleHeader = {
  height: 150,
  width: "100%",
  padding: 10,
  textAlign: "center",
  display: "inline-block"
};

var styleBody = {
  height: 500,
  width: "100%",
  textAlign: "center",
  display: "inline-block"
};

var styleCard = {
  width: 200,
  padding: 10,
  margin: 10,
  textAlign: "center",
  display: "inline-block"
};

var GodCard = function GodCard(_ref) {
  var title = _ref.title,
      description = _ref.description;
  return _react2.default.createElement(
    _Card.Card,
    { style: styleCard },
    _react2.default.createElement(_Card.CardHeader, { title: title }),
    _react2.default.createElement(
      _Card.CardText,
      null,
      description
    )
  );
};

var GodCards = function GodCards(_ref2) {
  var gods = _ref2.gods;
  return _react2.default.createElement(
    _Paper2.default,
    { style: styleBody },
    gods.map(function (_ref3) {
      var name = _ref3.name,
          description = _ref3.description;
      return _react2.default.createElement(GodCard, { key: name, title: name, description: description });
    })
  );
};

var GodForm = function (_Component) {
  _inherits(GodForm, _Component);

  function GodForm(props) {
    _classCallCheck(this, GodForm);

    var _this = _possibleConstructorReturn(this, (GodForm.__proto__ || Object.getPrototypeOf(GodForm)).call(this, props));

    _this.onDescriptionChange = function (event, value) {
      _this.setState({ description: value });
    };

    _this.onNameChange = function (event, value) {
      _this.setState({ name: value });
    };

    _this.onAdd = function () {
      var _this$state = _this.state,
          name = _this$state.name,
          description = _this$state.description;

      _this.props.onAdd({ name: name, description: description });
      _this.setState({ name: "", description: "" });
    };

    _this.state = { name: "", description: "" };
    return _this;
  }

  _createClass(GodForm, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        _Paper2.default,
        { style: styleHeader, zDepth: 5 },
        _react2.default.createElement(_TextField2.default, {
          hintText: "Name",
          value: this.state.name,
          onChange: this.onNameChange
        }),
        _react2.default.createElement("br", null),
        _react2.default.createElement(_TextField2.default, {
          hintText: "Description",
          value: this.state.description,
          onChange: this.onDescriptionChange
        }),
        _react2.default.createElement("br", null),
        _react2.default.createElement(_FlatButton2.default, { label: "Add", onTouchTap: this.onAdd })
      );
    }
  }]);

  return GodForm;
}(_react.Component);

// const GodForm = ({ onAdd }) =>
// <Paper style={styleHeader} zDepth={5}>
// <TextField hintText="Name" />
// <br />
// <TextField hintText="Description" />
// <br />
// <FlatButton label="Add" onTouchTap={onAdd} />
// </Paper>

var Gods = function Gods(_ref4) {
  var gods = _ref4.gods,
      onAdd = _ref4.onAdd;
  return _react2.default.createElement(
    _MuiThemeProvider2.default,
    null,
    _react2.default.createElement(
      "div",
      null,
      _react2.default.createElement(GodForm, { onAdd: onAdd }),
      _react2.default.createElement(GodCards, { gods: gods })
    )
  );
};

exports.default = Gods;