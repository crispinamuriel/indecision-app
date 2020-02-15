console.log('working as intended');

class Person {
  constructor(name = 'Anonymous', age  =  0) {
    this.name = name;
    this.age  = age;
  }
  sayHello() {
    console.log(`Hi, I am ${this.name}!`)
  }
  getDescription() {
    return `${this.name} is ${this.age} year(s) old.`
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age)
    this.major = major;
  }

  hasMajor() {
    return !!this.major;
  }

}

const me = new Student('Jenn', 36, 'Liberal Studies');
console.log(me)
me.sayHello()
console.log(me.getDescription())


const andrew  = new Person('Andrew Mead', 26);
console.log(andrew);
console.log(andrew.getDescription());

const newUser = new Person();
newUser.sayHello();
console.log(newUser.getDescription())
