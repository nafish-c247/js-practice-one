// const tinderUser = new Object();
// console.log(tinderUser);
// const tinderUser2 = {};
// console.log(tinderUser2);

const regularUser = {
    email: "nafish@example.com",
    fullName: {
        firstName: "Nafish",
        lastName: "Ahmed"
    },
    age: 22,
    isLoggedIn: false
}
// console.log(regularUser.fullName.firstName);

// const obj1 = { 1: "a", 2: "b" };
// const obj2 = { 3: "c", 4: "d" };
// console.log(Object.assign({}, obj1, obj2));
// const obj3 = { ...obj1, ...obj2 };
// console.log(obj3);

const users = {
    user1: {
        email: "email1@example.com",
        name: "User One",
        age: 30,
        isLoggedIn: true,
    },
    user2: {
        email: "email2@example.com",
        name: "User Two",
        age: 25,
        isLoggedIn: false,
    }
}

// console.log(Object.keys(users));
// console.log(Object.values(users));

// console.log(users.user1.hasOwnProperty("isLoggedIn"));

const course = {
    courseName: "JavaScript",
    price: 999,
    courseInstructor: "Nafish Ahmed"
}

