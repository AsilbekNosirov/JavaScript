// Object

const person1 = {
    firstName: "Bek",
    lastName: "Norov",
    age: 25,
    isEmployed: true,
    sayHello: function () { console.log("Hello, I am Bek!")},
    eat: function(){console.log("I am eating chicken")},
}
const person2 = {
    firstName: "Ali",
    lastName: "Jonov",
    age: 25,
    isEmployed: true,
    sayHello: () => console.log("Hello, I am Ali!"),
    eat: () => console.log("I'm eating beef"),
}

person2.sayHello();
person2.eat();

