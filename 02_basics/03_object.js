// singleton
// object.create

// object literal

const mySymbol = Symbol("mySymbol");

const person = {
  name: 'Nafees',
  [mySymbol]: "This is a symbol property",
  "full name": "Mohd Nafees",
  age: 30,
  city: "indore",
}
// console.log(person.name);
// console.log(person['name']);
// console.log(person["full name"]);
// console.log(person[mySymbol]);
// console.log(person);

person.greeting = function() {
  console.log(`Hello, my name is ${this.name}`);
}
console.log(person.greeting());