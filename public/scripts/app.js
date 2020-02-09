'use strict';

console.log('working as intended');

//es6 arrow functions are always anonymous functions , all arrow functions are anonymous, no place to put square inside the definition. If  you want to create an arrow function and assign it to a variable and use it.

var square = function square(x) {
  return x * x;
}; //this is the arrow function expression syntax
//we use this syntax when the arrow function simply returns an expression

console.log(square(9));

//es5
var es5Function = function es5Function(x) {
  return x * x;
};

//with an es5 function we can actually name the anon function after the definition of the anonymous function (after the =)
function es5Function2(x) {
  return x * x;
}

console.log(es5Function2(3));

var getFirstName = function getFirstName(fullName) {
  return fullName.split(' ')[0];
};

console.log(getFirstName('Jenn Muriel'));
