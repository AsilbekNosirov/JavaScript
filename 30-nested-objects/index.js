//  -----  Nested Objects  -----

class Person{

    constructor(name, age, ...address) {
        this.name = name;
        this.age = age;
        this.address = new Address(...address);
    }
}

class Address{

    constructor(street, city, country) {
        this.street = street;
        this.city = city;
        this.country = country;
    }
}

const person1 = new Person("Spongebob", 30, "123 Conch St.", "Amir Temur", "Uzbekistan");

const person2 = new Person("Patrick", 33, "123 Conch St.", "Amir Temur", "Uzbekistan");

const person3 = new Person("Sam", 23, "123 Conch St.", "Amir Temur", "Uzbekistan");

console.log(person3.address.country);