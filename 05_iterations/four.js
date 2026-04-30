const myObject = {
    js: 'JavaScript',
    py: 'Python',
    java: 'Java',
}
for (const key in myObject) {
    // console.log(key)
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programmingLanguages = ['JavaScript', 'Python', 'Java', 'C++'];
for (const key in programmingLanguages) {
    // console.log(programmingLanguages[key])
}

// const map = new Map(); // not iterable
// map.set("IN", "India");
// map.set("US", "United States");
// map.set("UK", "United Kingdom");

// for (const key in map) {
//     console.log(key)
// }