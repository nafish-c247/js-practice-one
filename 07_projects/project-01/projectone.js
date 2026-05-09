const button = document.querySelectorAll('.button')
const body = document.querySelector("body")

// button.forEach(function (button) {
//     console.log(button);
//     button.addEventListener('click', function(e) {
//         // console.log(e);
//         // console.log(e.target);
//         if(e.target.id === 'grey') {
//             body.style.backgroundColor = e.target.id;
//         } else if(e.target.id === 'white') {
//             body.style.backgroundColor = e.target.id 
//         } else if(e.target.id === 'blue') {
//             body.style.backgroundColor = e.target.id 
//         } else if (e.target.id === 'yellow') {
//             body.style.backgroundColor = e.target.id 
//         }
//     })
// })

button.forEach((button) => {
    button.addEventListener('click', (e) => {
        switch(e.target.id) {
            case 'grey':
            case 'white':
            case 'blue':
            case 'yellow':
                body.style.backgroundColor = e.target.id
                break

                default:
                console.log('Invalid Color')
        }
    })
})