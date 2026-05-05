const coding = ["HTML", "CSS", "JavaScript", "Python", "Ruby"];

coding.forEach(function(language) {
    // console.log(language);
})

// coding.forEach( (item) => {
//     console.log(item)
// } )

// function printLanguage(language) {
//     console.log(language);
// }

// coding.forEach(printLanguage)

coding.forEach((item,index, arr) => {
    // console.log(item, index, arr);
})

const myCoding = [
    {
        languageName: "HTML",
        languageType: "Markup Language"
    },
    {
        languageName: "CSS",
        languageType: "Styling Language"
    },
    {
        languageName: "JavaScript",
        languageType: "Programming Language"
    },
]

myCoding.forEach((item) => {
    console.log(item.languageName);
    
})