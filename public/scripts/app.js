'use strict';

// import React from 'react';
// import ReactDOM from 'react-dom';
console.log('app.js is running');
// JSX - JavaScript XML - a javascript syntax extention provided to us by react, way to define our templates (components) and inject our data into those templates

var app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer'
};
var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    app.title
  ),
  React.createElement(
    'p',
    null,
    app.subtitle
  ),
  React.createElement(
    'ol',
    null,
    React.createElement(
      'li',
      null,
      'Item one'
    ),
    React.createElement(
      'li',
      null,
      'Item two'
    )
  )
);

var userName = 'Miki';
var userAge = 36;
var userLocation = 'New York';
var user = {
  name: 'Jason',
  age: 30,
  location: 'Philadelphia'
};

function getLocation(location) {
  return location ? React.createElement(
    'p',
    null,
    'Location: ',
    location
  ) : null;
}

var template2 = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    user.name
  ),
  React.createElement(
    'p',
    null,
    'Age: ',
    user.age
  ),
  getLocation(user.location)
);
var appRoot = document.getElementById('app');

ReactDOM.render(template2, appRoot);
