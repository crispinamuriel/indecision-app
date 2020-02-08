"use strict";

/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */

console.log('App.js is running!');

//JSX - JavaScript XML
var app = {
  title: "Indecision App",
  subtitle: "Put your life in the hands of a computer.™"
};

var template = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    app.title
  ),
  React.createElement(
    "p",
    null,
    app.subtitle
  ),
  React.createElement(
    "ol",
    null,
    React.createElement(
      "li",
      null,
      "Item one"
    ),
    React.createElement(
      "li",
      null,
      "Item two"
    )
  )
);

var user = {
  name: 'Jenn Muriel',
  age: '36',
  location: 'Flushing, NY'
};

var templateTwo = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    user.name
  ),
  React.createElement(
    "p",
    null,
    "Age: ",
    user.age
  ),
  React.createElement(
    "p",
    null,
    "Location: ",
    user.location
  )
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
