const numbers = [ 5,4,7,9,3,1,4,15];
const total = numbers.reduce((previous, current) => previous + current, 0);
console.log(total);

const sum = numbers.reduce((p,c) => p + c, 0)
console.log(sum)