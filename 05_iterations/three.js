
const arr = [1, 2, 3, 4, 5];
for (num of arr) {
    // console.log(num);
}

const greeting = "Hello, World!";
for (char of greeting) {
    // console.log(`Each character: ${char}`);
}

const map = new Map();
map.set("IN", "India");
map.set("US", "United States");
map.set("UK", "United Kingdom");
// console.log(map)

for (const [key, value] of map) {
    console.log(`${key} :- ${value}`);
}

const myObject = {
    'game1': 'Chess',
    'game2': 'Football',
    'game3': 'Basketball',
    'game4': 'Cricket'
}
// for (const [key, value] of myObject) {
//     console.log(`${key} :- ${value}`); // TypeError: myObject is not iterable
// }

