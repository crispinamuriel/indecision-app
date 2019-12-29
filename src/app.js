/* eslint-disable react/react-in-jsx-scope */
// import React from 'react';
// import ReactDOM from 'react-dom';
console.log('app.js is running');
// JSX - JavaScript XML - a javascript syntax extention provided to us by react, way to define our templates (components) and inject our data into those templates

const app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer',
  options: ['One', 'Two']
};
const template = (
  <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{app.options.length ? 'Here are your options' : 'No options'}</p>

    <ol>
      <li>Item one</li>
      <li>Item two</li>
    </ol>
  </div>
  );

const name = 'Miki';
const age = 36;
const location = 'New York';
const user = { age, name, location }

function getLocation(location) {
  return location ? <p>Location: {location}</p> : null;
}

const template2 = (
  <div>
    <h1>{user.name ? user.name : "Anonymous"}</h1>
    {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
    {getLocation(user.location)}
  </div>
);
const appRoot = document.getElementById('app');


ReactDOM.render(template, appRoot);
