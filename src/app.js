// import React from 'react';
// import ReactDOM from 'react-dom';
console.log('app.js is running');
// JSX - JavaScript XML - a javascript syntax extention provided to us by react, way to define our templates (components) and inject our data into those templates

const app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer'
}
const template = (
  <div>
    <h1>{app.title}</h1>
    <p>{app.subtitle}</p>
    <ol>
      <li>Item one</li>
      <li>Item two</li>
    </ol>
  </div>
  );

const userName = 'Miki';
const userAge = 36;
const userLocation = 'New York';
const user = {
  name: 'Jason',
  age: 30,
  location: 'Philadelphia'
}

function getLocation(location) {
  return location ? <p>Location: {location}</p> : null;
}

const template2 = (
  <div>
    <h1>{user.name}</h1>
    <p>Age: {user.age}</p>
   {getLocation(user.location)}
  </div>
);
const appRoot = document.getElementById('app');


ReactDOM.render(template2, appRoot);
