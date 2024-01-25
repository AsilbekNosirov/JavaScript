// .reduce()

/* 
const prices = [2, 5, 20, 50, 15, 45, 25];

const total = prices.reduce(sum);

console.log(`$${total.toFixed(2)}`);

function sum(accumulator, element) {
    return accumulator + element;
}
*/

const grades = [40, 50, 65, 70, 90, 95, 55];

const maximum = grades.reduce(getMax);
const minimum = grades.reduce(getMin);

console.log(minimum);

function getMax(accum, element) {
    return Math.max(accum, element);
}
function getMin(accum, element) {
    return Math.min(accum, element);
}