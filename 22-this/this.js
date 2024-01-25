// this - reference to the object where THIS is used
//          person.name = this.name

const person1 = {
    name: "Bob",
    favFood: "Hamburgers",
    sayHello: function(){console.log("Hi, I'm Bob")},
    eat: function(){console.log(`${this.name} is eating ${this.favFood}`)},
}
const person2 = {
    name: "Jane",
    favFood: "Pizza",
    sayHello: function(){console.log(`Hi, I'm ${this.name}`)},
    eat: function(){console.log(`${this.name} is eating ${this.favFood}`)},
}

person1.eat();
person2.eat();