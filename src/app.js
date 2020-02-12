/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */

console.log('App.js is running!');

//JSX - JavaScript XML
const app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer.™',
  options: []
};

const submitOption = (e) => {
  e.preventDefault();

  const option = e.target.option.value;

  if (option) {
    app.options.push(option);
    e.target.option.value = '';
    appRender();
  }
}
const removeAll = () => {
  app.options = [];
  appRender();
}

const appRender = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? 'Here are your options:' : 'No options'}</p>
      <button onClick={removeAll}>Remove All</button>
      <ol>
        {app.options.map(option => (
          <li key={option}>{option}</li>
        ))}
      </ol>
      <form onSubmit={submitOption}>
        <input type="text" name="option" placeholder="type option here"/>
        <button type="submit">Add Option</button>
      </form>
    </div>
  );

  const appRoot = document.getElementById("app");

  ReactDOM.render(template, appRoot);

}

appRender();

