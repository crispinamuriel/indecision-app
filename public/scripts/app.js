"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* eslint-disable react/button-has-type */
/* eslint-disable react/no-multi-comp */
/* eslint-disable react/react-in-jsx-scope */

var obj = {
  name: 'Vikram',
  getName: function getName() {
    return this.name;
  }
};

var getName = obj.getName.bind(obj);

console.log(getName());

var optionsArray = ["wash dishes", "go shopping"];

var addOptionFunction = function addOptionFunction(e) {
  e.preventDefault();
  var option = e.target.option.value;
  if (option) {
    optionsArray.push(option);
    e.target.option.value = '';
    console.log(optionsArray);
  }
};

var IndecisionApp = function (_React$Component) {
  _inherits(IndecisionApp, _React$Component);

  function IndecisionApp() {
    _classCallCheck(this, IndecisionApp);

    return _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).apply(this, arguments));
  }

  _createClass(IndecisionApp, [{
    key: "render",
    value: function render() {
      var title = 'Indecision';
      var subtitle = 'Put your life in the hands of a computer';
      var opArr = ['thing one', 'thing2', 't4'];
      var chosen = '';
      var addOptionFunction2 = function addOptionFunction2(e) {
        e.preventDefault();
        var option = e.target.option.value;
        optionsArray.push(option);
        e.target.option.value = "";
        console.log(optionsArray);
      };

      return React.createElement(
        "div",
        null,
        React.createElement(Header, { header: title, subheader: subtitle }),
        React.createElement(Action, { opArr: opArr }),
        React.createElement(Options, { options: opArr }),
        React.createElement(AddOption, { addOptionFunction: addOptionFunction2 })
      );
    }
  }]);

  return IndecisionApp;
}(React.Component);

var Header = function (_React$Component2) {
  _inherits(Header, _React$Component2);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
  }

  _createClass(Header, [{
    key: "render",
    value: function render() {
      var header = this.props.header;
      var subheader = this.props.subheader;
      return React.createElement(
        "div",
        null,
        React.createElement(
          "h1",
          null,
          header
        ),
        React.createElement(
          "h2",
          null,
          subheader
        )
      );
    }
  }]);

  return Header;
}(React.Component);

var Action = function (_React$Component3) {
  _inherits(Action, _React$Component3);

  function Action(props) {
    _classCallCheck(this, Action);

    var _this3 = _possibleConstructorReturn(this, (Action.__proto__ || Object.getPrototypeOf(Action)).call(this, props));

    _this3.handlePick = _this3.handlePick.bind(_this3);
    return _this3;
  }

  _createClass(Action, [{
    key: "handlePick",
    value: function handlePick() {
      var chosen = Math.floor(Math.random());
      console.log(chosen);
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "button",
          { onClick: this.handlePick },
          "What should I do?"
        )
      );
    }
  }]);

  return Action;
}(React.Component);

var Options = function (_React$Component4) {
  _inherits(Options, _React$Component4);

  function Options(props) {
    _classCallCheck(this, Options);

    var _this4 = _possibleConstructorReturn(this, (Options.__proto__ || Object.getPrototypeOf(Options)).call(this, props));

    _this4.handleRemoveAll = _this4.handleRemoveAll.bind(_this4);
    return _this4;
  }

  _createClass(Options, [{
    key: "handleRemoveAll",
    value: function handleRemoveAll() {
      console.log('removed');
      console.log(this.props.options);
    }
  }, {
    key: "render",
    value: function render() {
      console.log(this.props.options);
      return React.createElement(
        "div",
        null,
        React.createElement(
          "button",
          { onClick: this.handleRemoveAll },
          "Remove All"
        ),
        React.createElement(
          "ol",
          null,
          this.props.options.map(function (option) {
            return React.createElement(Option, { key: option, option: option });
          })
        )
      );
    }
  }]);

  return Options;
}(React.Component);

var Option = function (_React$Component5) {
  _inherits(Option, _React$Component5);

  function Option() {
    _classCallCheck(this, Option);

    return _possibleConstructorReturn(this, (Option.__proto__ || Object.getPrototypeOf(Option)).apply(this, arguments));
  }

  _createClass(Option, [{
    key: "render",
    value: function render() {
      var option = this.props.option;
      return React.createElement(
        "div",
        null,
        React.createElement(
          "li",
          null,
          option
        )
      );
    }
  }]);

  return Option;
}(React.Component);

var AddOption = function (_React$Component6) {
  _inherits(AddOption, _React$Component6);

  function AddOption() {
    _classCallCheck(this, AddOption);

    return _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).apply(this, arguments));
  }

  _createClass(AddOption, [{
    key: "addOptionFunction",
    value: function addOptionFunction(e) {
      e.preventDefault();
      var option = e.target.elements.option.value.trim();
      if (option) {
        console.log(option);
      }
      e.target.option.value = '';
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "form",
          { onSubmit: this.addOptionFunction },
          React.createElement("input", { name: "option", type: "text", placeholder: "type option here" }),
          React.createElement(
            "button",
            null,
            "Add Option"
          )
        )
      );
    }
  }]);

  return AddOption;
}(React.Component);

ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById("app"));
