
// const numbers = [5,8,3,7,4,2,9];
// const doubled = [];
// for(let num of numbers){
//     const double = num * 2;
//     doubled.push(double);
// }
// console.log(doubled);




// const numbers = [5,8,3,7,4,2,9];
// function doubleIt(num){
//     return num * 2;
// }
// const result = numbers.map(doubleIt);
// console.log(result);




const numbers = [5,8,3,7,4,2,9];
const double2 = n => n * 2;
const output = numbers.map(double2);
console.log(output);