console.log('working');

//es6 arrow function differences / improvements
//arguments object is no longer bound with arrow functions, if you try to access arguments it will not work!
//this keyword is also non longer bound with arrow functions

// const add = function (a, b) {
//   console.log(arguments); //prints out all of the arguments passed to a function
//   return a + b;
// }

// console.log(add(55, 1, 1001));

const addArrowFunction = (a, b) => a + b; //arrow functions  DO NOT have access to arguments object,  'this' keyword is no longer bound!

console.log(addArrowFunction(10, 2));

const user = {
  name: 'Jenn',
  cities: ['Bakersfield', 'New York', 'Leon'],
  printPlacesLived() { //es6 method definition syntax: this method has to be an es5 method to use the 'this' keyword inside!
    this.cities.forEach((place) => { //this inside of the arrow function is using the parent's context of 'this'
      console.log(`${this.name} has lived in ${place}.`); //the arrow function does not bind it's own 'this' value!
    })
  },
  printArrayOfPlacesLived() {
    return this.cities.map((city) => `${this.name} has lived in ${city}!`);
  }
}

user.printPlacesLived();
console.log(user.printArrayOfPlacesLived());

const mult = {
  numbers: [10, 20, 30, 40],
  multBy: 3,
  multiply() {
    return this.numbers.map((num) => num * this.multBy);
  }
}

console.log(mult.multiply());
