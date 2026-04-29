// function loginUserMessage(username) {
//     return `Welcome back, ${username}!`;
// }
// console.log(loginUserMessage()); // Welcome back, undefined!
// console.log(loginUserMessage("")); // Welcome back, !
// console.log(loginUserMessage("Nafish")); // Welcome back, Nafish!

// function loginUserMessage(username) {
//     if (!username) {
//         return "Please provide a username.";
//     }
//     return `Welcome back, ${username}!`;    
// }
// console.log(loginUserMessage()); // Please provide a username.
// console.log(loginUserMessage("")); // Please provide a username.
// console.log(loginUserMessage("Nafish")); // Welcome back, Nafish!   


// function calculageCartPrice(...num1) {
//     return num1;
// }
// console.log(calculageCartPrice(100, 200, 300)); // [100, 200, 300]


// const user = {
//     name: "Nafish",
//     age: 22,
// }

// function handleObject(anyObject) {
//     console.log(`User name is ${anyObject.name} and age is ${anyObject.age}`);
// }
// handleObject(user); // User's name is Nafish and age is 22


const newArray = [200, 300, 400, 100];

function returnSecondValue(anyArray) {
    return anyArray[1];
}
console.log(returnSecondValue(newArray)); // 300