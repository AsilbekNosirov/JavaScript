// function expressions



// function decloration Example


/*
const numbers = [1, 2, 3, 4, 5, 6];
const squares = numbers.map(square);

console.log(squares);

function square(element) {
    return Math.pow(element, 2);
}
*/


// Fuction Expression Example

const numbers = [1, 2, 3, 4, 5, 6];
const squares = numbers.map(function (element) {
    return Math.pow(element, 2);
});

const cubes = numbers.map(function (element) {
    return Math.pow(element, 2);
});

const evenNums = numbers.filter(function (element) {
    return element % 2 === 0;
});

const oddNums = numbers.filter(function (element) {
    return element % 2 !== 0;
});

const total = numbers.reduce(function (accumulator, element) {
    return accumulator + element;
})
console.log(total);