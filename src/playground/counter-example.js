//import React from 'react;
//import ReactDOM from 'react-DOM';

let count = 0;

function addCount() {
  count++;
  appRender();
}

function minus() {
  count--;
  appRender();
}

function reset() {
  count = 0;
  appRender();
}

function appRender () {
  const returnedJSX = (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={addCount}>+1</button>
      <button onClick={minus}>-1</button>
      <button onClick={reset}>reset</button>
    </div>
  );
  ReactDOM.render(returnedJSX, document.getElementById('app'));
}

appRender();
