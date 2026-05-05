// const coding = ["HTML", "CSS", "JavaScript", "Python", "Ruby"];

// const values = coding.forEach((item) => {
//     console.log(item);
//     return item;  
// })
// console.log(values); // undefined

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNumbers = numbers.filter((num) => {
//     return num > 4
// } )
// console.log(newNumbers);


const movies = [
    {
        title: "The Shawshank Redemption",
        rating: 9.3,
        genre: "Drama"
    },
    {
        title: "The Godfather",
        rating: 9.2,
        genre: "Crime"
    },
    {
        title: "The Dark Knight",
        rating: 9.0,
        genre: "Action"
    },
    {
        title: "Pulp Fiction",
        rating: 8.9,
        genre: "Crime"
    },   
]

let crimeMovies = movies.filter((crM) => crM.title === "The Dark Knight")
// console.log(crimeMovies)

crimeMovies = movies.filter((item) => {
    return item.rating >= 9.1 && item.genre === "Drama"
})
console.log(crimeMovies);
