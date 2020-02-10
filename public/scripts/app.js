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
}; //arrow functions  DO NOT have access to arguments object,  'this' keyword is no longer bound!

console.log(addArrowFunction(10, 2));

var user = {
  name: 'Jenn',
  cities: ['Bakersfield', 'New York', 'Leon'],
  printPlacesLived: function printPlacesLived() {
    var _this = this;

    //es6 method definition syntax: this method has to be an es5 method to use the 'this' keyword inside!
    this.cities.forEach(function (place) {
      //this inside of the arrow function is using the parent's context of 'this'
      console.log(_this.name + ' has lived in ' + place + '.'); //the arrow function does not bind it's own 'this' value!
    });
  },
  printArrayOfPlacesLived: function printArrayOfPlacesLived() {
    var _this2 = this;

    return this.cities.map(function (city) {
      return _this2.name + ' has lived in ' + city + '!';
    });
  }
};

user.printPlacesLived();
console.log(user.printArrayOfPlacesLived());

var mult = {
  numbers: [10, 20, 30, 40],
  multBy: 3,
  multiply: function multiply() {
    var _this3 = this;

    return this.numbers.map(function (num) {
      return num * _this3.multBy;
    });
  }
};

console.log(mult.multiply());
