
// --------- sort() ---------


const people = [{ name: "Spongebob", age: 30, gpa: 3.0 },
                { name: "Patrick", age: 32, gpa: 1.5 },
                { name: "Sandy", age: 23, gpa: 3.5 },
                { name: "Squidward", age: 56, gpa: 4.0 }]
                

// people.sort((a, b) => a.age - b.age);
people.sort((a, b) => b.name.localeCompare(a.name));


console.log(people);