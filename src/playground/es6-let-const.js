console.log('hello');
/*
//The point of this file is to provide knowledge about var vs let


//var variables can be redefined, we can have duplicate declarations with no error
var nameVar = 'Andrew';
var nameVar = 'Mike';
console.log('nameVar', nameVar);


//let will not allow duplicate declarations, and this code will error
//TypeError: src/playground/es6-let-const.js: Duplicate declaration "nameLet"
let nameLet = 'Jenn';
nameLet = 'Daniel';
//let nameLet = 'Andrew';
console.log('nameLet', nameLet);

const nameConst = 'Frank';
//TypeError: src/playground/es6-let-const.js: Duplicate declaration "nameConst"
// const nameConst = 'Gunther';
console.log('nameConst', nameConst);

//with both let and const you cannot redefine variables
// with const you cannot reassign a variable as well.
*/

/*
//Scope - Function Scope
//var based variables are function scoped
//meaning that each variable is specific to the function that it is created inside of and cannot be accessed outside

function getPetName() {
  var petName = 'Hal';
  return petName;
}

getPetName();
//console.log(petName); //This console log errors because petname is defined within the function scope which is not accessible outside of the function

const petName = getPetName();
console.log(petName); //This does not error because it is now defined outside of the function (in the same scope)

//The same thing is true for let/const they are also function scoped
*/

//Block scoping - with var vs const/let
//when something is block level scoped, not only is it bound to functions, it is also bound to code level blocks
//things like the code block to a for loop or a for/if statement

//var
var fullName = 'Jenn Muriel';

if (fullName) {
  var firstName = fullName.split(' ')[0];
  console.log(firstName);
}

// with var based variables, they are function scoped
//which means that firstName where it stands is globally scoped to this file, it is inside of an 'if' statement this is not a function.

console.log(firstName);

//const / let

const fullNameConst = "Dan Muriel";

if (fullName) {
  const firstNameConst = fullNameConst.split(" ")[0];
  console.log(firstNameConst);
}

//this console.log Errors because const is block scoped.
console.log(firstNameConst);
//app.js:75 Uncaught ReferenceError: firstNameConst is not defined


//Var - Function scoped only
//const /let - Function AND Block level scoped
