/* eslint-disable react/react-in-jsx-scope */
// import React from 'react';
// import ReactDOM from 'react-dom';

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
