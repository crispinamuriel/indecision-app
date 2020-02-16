'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Counter = function (_React$Component) {
  _inherits(Counter, _React$Component);

  function Counter(props) {
    _classCallCheck(this, Counter);

    var _this = _possibleConstructorReturn(this, (Counter.__proto__ || Object.getPrototypeOf(Counter)).call(this, props));

    _this.state = {
      count: 0
    };
    _this.handleAddCount = _this.handleAddCount.bind(_this);
    _this.handleMinusCount = _this.handleMinusCount.bind(_this);
    _this.handleResetCount = _this.handleResetCount.bind(_this);
    return _this;
  }

  _createClass(Counter, [{
    key: 'handleAddCount',
    value: function handleAddCount() {
      this.setState({
        count: this.state.count + 1
      });
    }
  }, {
    key: 'handleMinusCount',
    value: function handleMinusCount() {
      this.setState({
        count: this.state.count - 1
      });
    }
  }, {
    key: 'handleResetCount',
    value: function handleResetCount() {
      this.setState({
        count: 0
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
          'Counter: ',
          this.state.count
        ),
        React.createElement(
          'button',
          { onClick: this.handleAddCount },
          '+'
        ),
        React.createElement(
          'button',
          { onClick: this.handleMinusCount },
          '-'
        ),
        React.createElement(
          'button',
          { onClick: this.handleResetCount },
          'Reset'
        )
      );
    }
  }]);

  return Counter;
}(React.Component);

ReactDOM.render(React.createElement(Counter, null), document.getElementById('app'));

// //import React from 'react;
// //import ReactDOM from 'react-DOM';

// let count = 0;

// function addCount() {
//   count++;
//   appRender();
// }

// function minus() {
//   count--;
//   appRender();
// }

// function reset() {
//   count = 0;
//   appRender();
// }

// function appRender () {
//   const returnedJSX = (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={addCount}>+1</button>
//       <button onClick={minus}>-1</button>
//       <button onClick={reset}>reset</button>
//     </div>
//   );
//   ReactDOM.render(returnedJSX, document.getElementById('app'));
// }

// appRender();

// let count = 0;

// const addCount = () => {
//   count++;
//   console.log(count);
//   appRender();
// };
// const minusCount = () => {
//   count--;
//   console.log(count);
//   appRender();
// };
// const resetFunc = () => {
//   count = 0;
//   console.log(count);
//   appRender();
// };

// const appRender = () => {
//   const templateTwo = (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={() => {
//       addCount()
//       }}>+1</button>
//       <button onClick={minusCount}>-1</button>
//       <button onClick={resetFunc}>reset</button>
//     </div>
//   );
//   const appRoot = document.getElementById("app");

//   ReactDOM.render(templateTwo, appRoot);
// };

// appRender();

// function that is set up on the button
// event listener listens for a button click
// user clicks on button
// onClick function runs
// function manipulates state
// rerender happens
// rerender is a function that runs, that holds our jsx, defines our jsx,  and uses ReactDOM.render() function to rerender it to the dom.


//Rerendering is expensive, we can see our app react to us clicking _1, we see a little flash over the {count}, react is super effiction. React uses some Virtual DOM algorithms in JavaScript to determine the minimum number of changes that need to be made in order to correctly render the application.
//Using reactDOM.render we are using the virtualDOM algorithm to efficiently render and rerender our application.

//running a li8ttle bit of JS code to see if two  things are equal or not, what coes back is just an object , use albor4ithms to compare atow objecte s wich is our JSX tree.
