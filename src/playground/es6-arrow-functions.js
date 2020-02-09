console.log('working as intended');

//es6 arrow functions are always anonymous functions , all arrow functions are anonymous, no place to put square inside the definition. If  you want to create an arrow function and assign it to a variable and use it.

const square = x => x  * x; //this is the arrow function expression syntax
//we use this syntax when the arrow function simply returns an expression

console.log(square(9));

//es5
const es5Function = function (x) {
  return x * x;
}

//with an es5 function we can actually name the anon function after the definition of the anonymous function (after the =)
function es5Function2 (x) {
  return x * x;
}

console.log(es5Function2(3));


const getFirstName = fullName => fullName.split(' ')[0];

console.log(getFirstName('Jenn Muriel'));
