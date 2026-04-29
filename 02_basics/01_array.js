const myArray = [1, 2, 3, 4, 5];
// console.log(myArray);

// const myArray2 = ["apple", "banana", "cherry"];
// console.log(myArray2);

// const newArray = myArray.join()
// console.log(newArray);
// console.log(typeof newArray);

// slice and splice

console.log("A", myArray);

const newArray = myArray.slice(0, 3);
console.log("B", newArray);

const splicedArray = myArray.splice(1, 3);
console.log("C", splicedArray);
console.log("D", myArray);