// const user = {
//     name: 'John',
//     price: 100,
//     welcomeMessage: function() {
//         console.log(`Welcome, ${this.name}!`);
//         console.log((this))
//     }
// }
// user.welcomeMessage(); // Welcome, John!
// user.name = 'Deo';
// user.welcomeMessage(); // Welcome, Deo!

// console.log(this); // Window object or blank object


// const employee = () => (
//     {
//     name: 'Alice',
//     salary: 50000,
// }
// )
// console.log(employee()); // { name: 'Alice', salary: 50000 }

// const addNumbers = (a, b) => a + b;
// console.log(addNumbers(5, 10)); // 15

// const addNum2 = (c, d) => {
//     return c + d;
// }
// console.log(addNum2(7, 3)); // 10

const numThree = (x, y) => x + y;
console.log(numThree(4, 6)); // 10