console.log(addOne(5))

function addOne(num1) {
    return num1 + 1;
}   

// console.log(addTwo(8)) // Uncaught ReferenceError: Cannot access 'addTwo' before initialization
const addTwo = function(num2) {
    return num2 + 2;
}   
console.log(addTwo(8)) // 10
