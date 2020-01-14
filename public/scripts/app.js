'use strict';

/* eslint-disable react/react-in-jsx-scope */
// import React from 'react';
// import ReactDOM from 'react-dom';
console.log('app.js is running');
// JSX - JavaScript XML - a javascript syntax extention provided to us by react, way to define our templates (components) and inject our data into those templates

var app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer',
  options: []
};

var onRemoveAll = function onRemoveAll() {
  app.options = [];
  renderApp();
};

var handleSubmit = function handleSubmit(e) {
  e.preventDefault();

  var option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
    renderApp();
  }
};

var appRoot = document.getElementById('app');

var renderApp = function renderApp() {
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
      app.options.length ? 'Here are your options' : 'No options'
    ),
    React.createElement(
      'button',
      { type: 'reset', onClick: onRemoveAll },
      'Remove All'
    ),
    React.createElement(
      'ol',
      null,
      app.options.map(function (option, i) {
        return React.createElement(
          'li',
          { key: i },
          option
        );
      })
    ),
    React.createElement(
      'form',
      { onSubmit: handleSubmit },
      React.createElement('input', { type: 'text', name: 'option', placeholder: 'type your option' }),
      React.createElement(
        'button',
        { type: 'submit' },
        'Add Option'
      )
    )
  );

  ReactDOM.render(template, appRoot);
};

renderApp();
