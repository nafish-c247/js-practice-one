let newDate = new Date();
console.log(newDate);

let newDate2 = new Date("October 13, 2020 11:13:00");
console.log(newDate2);

let newDate3 = new Date(2020, 9, 13, 11, 13, 0);
console.log(newDate3);

console.log(newDate.getFullYear());
console.log(newDate.getMonth()+1);
console.log(newDate.getDate());