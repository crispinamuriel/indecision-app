'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

console.log('working as intended');

var Person = function Person(name) {
  _classCallCheck(this, Person);

  this.name = name;
};

var me = new Person('Jenn');
console.log(me);

var andrew = new Person('Andrew Mead');
console.log(andrew);
