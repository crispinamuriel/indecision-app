"use strict";

// import React from 'react';
// import ReactDOM from 'react-dom';
console.log("app.js is running");
//JSX - JavaScript XML - a javascript syntax extention provided to us by react, way to define our templates (components) and inject our data into those templates
var template = React.createElement(
  "h1",
  null,
  "Working as intended"
);
var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
