// Arrow Function

// const hello = (name, age) => { console.log(`Hello ${name}`)
//                                console.log(`You are ${age} years old`)};

// hello("Bro", 25)

// setTimeout(() => console.log("Hello"), 2000);

const numbers = [1, 2, 3, 4, 5, 6, 7];

const squares = numbers.map((element) => Math.pow(element, 2)); // .map / math.pow
const cubes = numbers.map((element) => Math.pow(element, 3));
const evenNums = numbers.filter((element) => element % 2 === 0); // .filter / Even/Odd
const oddNums = numbers.filter((element) => element % 2 !== 0);
const total = numbers.reduce((acc, el) => acc + el); // .reduce / sum

console.log(total);