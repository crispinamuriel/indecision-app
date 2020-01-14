/* eslint-disable react/react-in-jsx-scope */
// import React from 'react';
// import ReactDOM from 'react-dom';
console.log('app.js is running');
// JSX - JavaScript XML - a javascript syntax extention provided to us by react, way to define our templates (components) and inject our data into those templates

const app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer',
  options: []
};

const onRemoveAll = () => {
  app.options = [];
  renderApp();
}

const handleSubmit = (e) => {
  e.preventDefault();

  const option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
    renderApp();
  }
}

const appRoot = document.getElementById('app');

const renderApp = () => {
 const template = (
   <div>
     <h1>{app.title}</h1>
     {app.subtitle && <p>{app.subtitle}</p>}
     <p>{app.options.length ? 'Here are your options' : 'No options'}</p>
     <button type="reset" onClick={onRemoveAll}>Remove All</button>
     <ol>
       {app.options.map((option, i) => <li key={i}>{option}</li>)}
     </ol>
     <form onSubmit={handleSubmit}>
       <input type="text" name="option" placeholder="type your option" />
       <button type="submit">Add Option</button>
     </form>
   </div>
 );

 ReactDOM.render(template, appRoot);
}

renderApp();
