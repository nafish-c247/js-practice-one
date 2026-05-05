const myNums = [1,2,3];

// const myTotal = myNums.reduce(function (accumulator, currentValue) {
//     console.log(`acc: ${accumulator} and currValue ${currentValue}`);
//     return accumulator + currentValue;

// }, 0)

const myTotal = myNums.reduce((acc, curr) => acc+curr, 0)

// console.log(myTotal);

const shoppingCart = [
    {
        itemName: "Tshirt",
        price: 499
    },
    {
        itemName: "Mobile",
        price: 19999
    },
    {
        itemName: "Bag",
        price: 799
    },
    
]

const cartTotal = shoppingCart.reduce((acc, item) => acc + item.price, 0 )
console.log(cartTotal);
