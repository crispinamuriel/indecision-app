'use strict';

console.log('working');

//es6 arrow function differences / improvements
//arguments object is no longer bound with arrow functions, if you try to access arguments it will not work!
//this keyword is also non longer bound with arrow functions

// const add = function (a, b) {
//   console.log(arguments); //prints out all of the arguments passed to a function
//   return a + b;
// }

// console.log(add(55, 1, 1001));

var addArrowFunction = function addArrowFunction(a, b) {
  return a + b;
};

console.log(addArrowFunction(10, 2));

var user = {
  name: 'Jenn',
  cities: ['Bakersfield', 'New York', 'Leon'],
  printPlacesLived: function printPlacesLived() {
    var _this = this;

    this.cities.forEach(function (place) {
      console.log(_this.name + ' has lived in ' + place + '.');
    });
  }
};

user.printPlacesLived();
