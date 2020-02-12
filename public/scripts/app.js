'use strict';

/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */

console.log('App.js is running!');

//JSX - JavaScript XML
var app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer.™',
  options: []
};

var submitOption = function submitOption(e) {
  e.preventDefault();

  var option = e.target.option.value;

  if (option) {
    app.options.push(option);
    e.target.option.value = '';
    appRender();
  }
};
var removeAll = function removeAll() {
  app.options = [];
  appRender();
};

var appRender = function appRender() {
  var template = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      app.title
    ),
    app.subtitle && React.createElement(
      'p',
      null,
      app.subtitle
    ),
    React.createElement(
      'p',
      null,
      app.options.length > 0 ? 'Here are your options:' : 'No options'
    ),
    React.createElement(
      'button',
      { onClick: removeAll },
      'Remove All'
    ),
    React.createElement(
      'ol',
      null,
      app.options.map(function (option) {
        return React.createElement(
          'li',
          { key: option },
          option
        );
      })
    ),
    React.createElement(
      'form',
      { onSubmit: submitOption },
      React.createElement('input', { type: 'text', name: 'option', placeholder: 'type option here' }),
      React.createElement(
        'button',
        { type: 'submit' },
        'Add Option'
      )
    )
  );

  var appRoot = document.getElementById("app");

  ReactDOM.render(template, appRoot);
};

appRender();
