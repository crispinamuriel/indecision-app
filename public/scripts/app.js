'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* eslint-disable react/react-in-jsx-scope */
console.log('working as intended');

var Toggle = function (_React$Component) {
  _inherits(Toggle, _React$Component);

  function Toggle(props) {
    _classCallCheck(this, Toggle);

    var _this = _possibleConstructorReturn(this, (Toggle.__proto__ || Object.getPrototypeOf(Toggle)).call(this, props));

    _this.state = {
      visible: false,
      details: 'These are some details'
    };
    _this.handleToggle = _this.handleToggle.bind(_this);
    return _this;
  }

  _createClass(Toggle, [{
    key: 'handleToggle',
    value: function handleToggle() {
      this.setState(function (prevState) {
        return {
          visible: !prevState.visible
        };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'h1',
          null,
          'Visibility Toggle'
        ),
        React.createElement(
          'button',
          { type: 'submit', onClick: this.handleToggle },
          this.state.visible ? 'hide details' : 'show details'
        ),
        this.state.visible && React.createElement(
          'div',
          null,
          React.createElement(
            'p',
            null,
            this.state.details
          )
        )
      );
    }
  }]);

  return Toggle;
}(React.Component);

ReactDOM.render(React.createElement(Toggle, null), document.getElementById('app'));

// const app = {
//   details: 'These are the details',
//   showDetails: false
// }

// const showMyDetails = () => {
//   app.showDetails = !app.showDetails;
//   render();
// }

// const render = () => {
//   const template = (
//     <div>
//       <h1>Visibility Toggle</h1>
//       <button onClick={showMyDetails}>
//         {app.showDetails ? "Hide Details" : "Show Details"}
//       </button>
//       {app.showDetails && <h3>{app.details}</h3>}
//     </div>
//   );
//   const appRoot = document.getElementById('app');
//   ReactDOM.render(template, appRoot);
// }

// render();
