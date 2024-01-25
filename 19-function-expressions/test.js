/*
const numbers = [2, 3, 6, 2, 7]

let total = 0

for (let i = 0; i < numbers.length; i++) {
    total = total + numbers[i]    
}

console.log(total);

*/

const numbers = [2, 3, 6, 2, 7]

const res = numbers.reduce((total, el) => total + el)
console.log(res);