// Destructuring

// ------- EXAMLE 1 -------
// Swap the value of two variables

/*
let a = 1;
let b = 2;

[a, b] = [b, a];

console.log(a);
console.log(b);
*/


// ------- EXAMLE 2 -------
// swap 2 elements in an array

/*
const colors = ["red", "green", "blue", "black", "white"];

[colors[0], colors[4]] = [colors[4], colors[0]];

console.log(colors);
*/

// ----------- EXAMLE 3 -------------
//  Assign array elements to variables

/*
const colors = ["red", "green", "blue", "black", "white"];

const [firstColor, secondColor, thirdColor, ...extraColors] = colors;

console.log(firstColor);
console.log(secondColor);
console.log(thirdColor);
console.log(extraColors);
*/

// ----------- EXAMLE 4 -------------
// Extract values from objects

/*
const person1 = {
    firstName: "Sam",
    lastName: "An",
    age: 23,
    job: "Barber"
}

const person2 = {
    firstName: "Jim",
    lastName: "Cole",
    age: 56,
}

const { firstName, lastName, age, job = "unemployed" } = person2;

console.log(firstName);
console.log(lastName);
console.log(age);
console.log(job);
*/

// ----------- EXAMLE 5 -------------


function displayPerson({ firstName, lastName, age, job="Unemployed" }) {
    console.log(`name: ${firstName} ${lastName}`);
    console.log(`age: ${age}`);
    console.log(`job: ${job}`);
}

const person1 = {
    firstName: "Sam",
    lastName: "An",
    age: 23,
    job: "Barber"
}

const person2 = {
    firstName: "Jim",
    lastName: "Cole",
    age: 56,
}

displayPerson(person1)