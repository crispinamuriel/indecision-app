// //import React from 'react;
// //import ReactDOM from 'react-DOM';

// let count = 0;

// function addCount() {
//   count++;
//   appRender();
// }

// function minus() {
//   count--;
//   appRender();
// }

// function reset() {
//   count = 0;
//   appRender();
// }

// function appRender () {
//   const returnedJSX = (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={addCount}>+1</button>
//       <button onClick={minus}>-1</button>
//       <button onClick={reset}>reset</button>
//     </div>
//   );
//   ReactDOM.render(returnedJSX, document.getElementById('app'));
// }

// appRender();

let count = 0;

const addCount = () => {
  count++;
  console.log(count);
  appRender();
};
const minusCount = () => {
  count--;
  console.log(count);
  appRender();
};
const resetFunc = () => {
  count = 0;
  console.log(count);
  appRender();
};

const appRender = () => {
  const templateTwo = (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => {
      addCount()
      }}>+1</button>
      <button onClick={minusCount}>-1</button>
      <button onClick={resetFunc}>reset</button>
    </div>
  );
  const appRoot = document.getElementById("app");

  ReactDOM.render(templateTwo, appRoot);
};

appRender();

// function that is set up on the button
// event listener listens for a button click
// user clicks on button
// onClick function runs
// function manipulates state
// rerender happens
// rerender is a function that runs, that holds our jsx, defines our jsx,  and uses ReactDOM.render() function to rerender it to the dom.


//Rerendering is expensive, we can see our app react to us clicking _1, we see a little flash over the {count}, react is super effiction. React uses some Virtual DOM algorithms in JavaScript to determine the minimum number of changes that need to be made in order to correctly render the application.
//Using reactDOM.render we are using the virtualDOM algorithm to efficiently render and rerender our application.

//running a li8ttle bit of JS code to see if two  things are equal or not, what coes back is just an object , use albor4ithms to compare atow objecte s wich is our JSX tree.
