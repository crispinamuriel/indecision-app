"use strict";

/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */

console.log('App.js is running!');

//JSX - JavaScript XML
var app = {
  title: "Indecision App",
  subtitle: "Put your life in the hands of a computer.™",
  options: ['Eat hamburger']
};

var template = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    app.title
  ),
  app.subtitle && React.createElement(
    "p",
    null,
    app.subtitle
  ),
  React.createElement(
    "p",
    null,
    app.options.length > 0 ? 'Here are your options:' : 'No options'
  ),
  React.createElement(
    "ol",
    null,
    app.options.map(function (option) {
      return React.createElement(
        "li",
        { key: option },
        option
      );
    })
  )
);

var user = {
  name: 'Andrew',
  age: 26,
  location: 'New York'
};

var getLocation = function getLocation(location) {
  if (location) {
    return React.createElement(
      "p",
      null,
      "Location: ",
      location
    );
  }
};

var templateTwo = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    user.name ? user.name : 'Anonymous'
  ),
  user.age && user.age > 17 && React.createElement(
    "p",
    null,
    "Age: ",
    user.age
  ),
  getLocation(user.location)
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
