// Inheritance

class Animal{
    alive = true;

    eat() {
        console.log(`This ${this.name} is eating`);
    }
    sleep() {
        console.log(`This ${this.name} is sleeping`);
    }
}
class Rabbit extends Animal{
    name = "rabbit";

    run() {
        console.log(`This ${this.name} is running`);
    }
}
class Fish extends Animal{
    name = "fish";

    swim() {
        console.log(`This ${this.name} is Swimming`);
    }
}
class Hawk extends Animal{
    name = "hawk";

    fly() {
        console.log(`This ${this.name} is Flying`);
    }
}

const rabbit = new Rabbit();
const fish = new Fish();
const hawk = new Hawk();

console.log(rabbit.alive);
rabbit.eat();
rabbit.sleep();
fish.swim();