// import React from 'react';
// import ReactDOM from 'react-dom';

//JSX - JavaScript XML - a javascript syntax extention provided to us by react, way to define our templates (components) and inject our data into those templates
// const template = <p>This is JSX from app.js</p>;
var template = React.createElement("h1", {id: 'someid'}, "Something new");
const appRoot = document.getElementById('app');
console.log('app.js is running');

ReactDOM.render(template, appRoot);
