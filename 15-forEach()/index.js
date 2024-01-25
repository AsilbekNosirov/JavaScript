// forEach() method

// let numbers = [1, 2, 3, 4, 5];

// numbers.forEach(cube);
// numbers.forEach(display);

// function double(element, index, array) {
//     array[index] = element * 2;
// }

// function triple(element, index, array) {
//     array[index] = element * 3;
// }

// function square(element, index, array) {
//     array[index] = Math.pow(element, 2);
// }

// function cube(element, index, array) {
//     array[index] = Math.pow(element, 3);
// }

// function display(element) {
//     console.log(element);
// }
/*
let fruits = ["apple", "banana", "orange", "coconut"];

fruits.forEach(capitalize);
fruits.forEach(display);

function upperCase(element, index, array){
    array[index] = element.toUpperCase();
}

function lowerCase(element, index, array){
    array[index] = element.toLowerCase();
}

function capitalize(element, index, array) {
    array[index] = element.charAt(0).toUpperCase() + element.slice(1);
}

function display(element) {
    console.log(element);
}
*/
const names = ["bob", "popo", "lolo"];

// for (let i = 0; i < names.length; i++) {
//     console.log(`${i+1}. ${names[i]}`);

// }

// names.forEach((name, i) => {
//   console.log(`${i + 1}. ${name}`);
// });

names.map((name, i) => {
    console.log(`${i + 1}. ${name}`);
})