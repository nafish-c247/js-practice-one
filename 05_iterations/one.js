// for (let i =0; i < 5; i++) {
//     console.log(i);
// }

for (let i = 0; i < 5; i++) {
    const element = i;
    if (i == 2) {
        // console.log('2 is my favorite number!');
    }
    // console.log(element);
    
}

// for (let i = 1; i <= 10; i++) {
//     // console.log(`Outer loop value ${i}`);
//     for (let j = 1; j <= 10; j++) {
//         // console.log(`Inner loop value ${j} and inner loop value ${i}`);
//         console.log(i + "*" + j + "=" + (i * j));
//     }
// }

let myArray = ["flash", "superman", "wonder woman"];
// console.log(myArray.length);
for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    // console.log(element);
}

// break and continue statements
// for (let i=1; i <= 10; i++) {
//     if (i == 5) {
//         console.log('Number 5 is deducted');
//         break; // exits the loop when i is 5
//     }
//     console.log(i);

// }

for (let i=1; i <= 10; i++) {
    if (i == 5) {
        console.log('Number 5 is deducted');
        continue; // skips the rest of the loop when i is 5 and continues with the next iteration
    }
    console.log(i);

}