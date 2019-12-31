console.log('hello');

var nameVar = 'Andrew';
var nameVar = 'Tom';

console.log('nameVar', nameVar);


let nameLet = 'Jenn';
nameLet = 'Julie';
console.log('nameLet', nameLet);

const nameConst = 'Frank';
console.log('nameConst', nameConst);


function getPetName() {
  let petName = 'Hal';
  return petName;
}

// console.log(getPetName());



//Block scoping

var fullName = 'Crispina Muriel';
let firstName;

if (fullName) {
  firstName = fullName.split('  ')[0];
  console.log(firstName);
}

console.log(firstName);
