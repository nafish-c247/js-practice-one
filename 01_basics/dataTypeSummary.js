// primitive

// 7 types of primitive data types in JavaScript
// 1. String
// 2. Number
// 3. Boolean
// 4. Null
// 5. Undefined
// 6. Symbol
// 7. BigInt

const score = 33
const scoreValue = 33.32

const isLoggedIn = false
const outsideTemp = null

const id = Symbol("123")
const anotherId = Symbol("123")

// console.log(id === anotherId) // false

const bigNumber = 1234567890123456789012345678901234567890n

// Reference (Non-primitive)

// 1. Object
// 2. Array
// 3. Function

const person = {
    name: "John",
    age: 30,
    hobbies: ["reading", "gaming"],
    greet: function() {
        console.log("Hello")
    } 
    
}
// person.greet();
// console.log(person.name) 

function myFunction() {
    console.log("This is a function")
}

console.log(typeof anotherId) // symbol
console.log(typeof bigNumber) // bigint


// ================== 
// stack => primitive data types
// heap => non-primitive(reference)  data types

let myName = "nafees"
let anotherName = myName
anotherName = "Mansoori"

console.log(myName) // nafees
console.log(anotherName) // Mansoori

let userOne = {
    name: "nafees",
    age: 30
}
let userTwo = userOne
userTwo.name = "Mansoori"

console.log(userOne.name) // Mansoori
console.log(userTwo.name) // Mansoori
