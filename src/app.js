/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */

console.log('App.js is running!');

//JSX - JavaScript XML
const app = {
  title: "Indecision App",
  subtitle: "Put your life in the hands of a computer.™"
};

let template = (
  <div>
    <h1>{app.title}</h1>
    <p>{app.subtitle}</p>
    <ol>
      <li>Item one</li>
      <li>Item two</li>
    </ol>
  </div>
);

const user = {
  name: 'Jenn Muriel',
  age: '36',
  location: 'Flushing, NY'
}

const templateTwo = (
  <div>
    <h1>{user.name}</h1>
    <p>Age: {user.age}</p>
    <p>Location: {user.location}</p>
  </div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
