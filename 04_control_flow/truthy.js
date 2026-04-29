// const userEmail = 'user@example.com';

// if (userEmail) {
//     console.log('User is authenticated.');
// }

// const userEmail2 = '';

// if (userEmail2) {
//     console.log('User two is authenticated.');
// } else {
//     console.log('User two is not authenticated.'); //returns false because an empty string is falsy in JavaScript
// }

// const userEmail3 = [];

// if (userEmail3) {
//     console.log('User three is authenticated.');  //returns true because an empty array is truthy in JavaScript
// } else {
//     console.log('User three is not authenticated.');
// }

// falsy values in JavaScript include: false, 0, -0, 0n, "", null, undefined, and NaN. All other values are considered truthy.

// In JavaScript, a value is considered "truthy" if it evaluates to true in a boolean context. This means that when you use a value in a condition (like an if statement), it will be treated as true if it's truthy, and false if it's falsy.
// Examples of truthy values include:
// - Non-empty strings (e.g., "hello")
// - Non-zero numbers (e.g., 1, -1, 3.14)
// - Objects (e.g., {})
// - Arrays (e.g., [])
// - Functions (e.g., function() {})


// const testEmail = []
// if (testEmail.length === 0) {
//     console.log('Test email is empty.');
// }

// const emptyObject = {};
// if (Object.keys(emptyObject).length === 0) {
//     console.log('The object is empty.');
// }

// Nullish coalescing operator (??) is used to provide a default value when dealing with null or undefined values.

let value1;
// value1 = 5 ?? 10; // value1 will be 5 because it is not null or undefined
// value1 = null ?? 10; // value1 will be 10 because null is considered nullish
// value1 = undefined ?? 20; // value1 will be 20 because undefined is considered nullish
value1 = null ?? 4 ?? 5; // value1 will be 4 because it is the first non-nullish value in the chain

console.log(value1);

