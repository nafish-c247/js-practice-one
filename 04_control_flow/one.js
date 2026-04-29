// const isLoggedIn = true;

// if (isLoggedIn) {
//     console.log('Welcome back!');
// } else {
//     console.log('Please log in to continue.');
// }

// const temperature = 42;
//     if (temperature === 42) {
//         console.log('It is a hot day.');
//     } else if (temperature < 42) {
//         console.log('It is a cool day.');
//     }

const userLoggedIn = true;
const dabitCard = true;
const loggedInFromGoogle = true;

if (userLoggedIn && dabitCard) {
    console.log('You can make a purchase.');
}

if (userLoggedIn || loggedInFromGoogle) {
    console.log('You are logged in.');
}