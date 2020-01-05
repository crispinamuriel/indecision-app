'use strict';

//import React from 'react;
//import ReactDOM from 'react-DOM';

var count = 0;

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

function appRender() {
  var returnedJSX = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      'Count: ',
      count
    ),
    React.createElement(
      'button',
      { onClick: addCount },
      '+1'
    ),
    React.createElement(
      'button',
      { onClick: minus },
      '-1'
    ),
    React.createElement(
      'button',
      { onClick: reset },
      'reset'
    )
  );
  ReactDOM.render(returnedJSX, document.getElementById('app'));
}

appRender();
