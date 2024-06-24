// STATIC key word


/*
// 1- example

class MathUtil{
    static PI = 3.14159;

    static GetDiameter(radius){
        return radius * 2;
    }

    static GetCirconference(radius){
        return 2 * this.PI * radius;
    }

    static GetArea(radius){
        return this.PI * radius * radius;
    }

}

// const math = new MathUtil()
console.log(MathUtil.PI);
console.log(MathUtil.GetDiameter(10));
console.log(MathUtil.GetArea(10));
*/

//  2- exapmle

class User{

    static userCount = 0;

    constructor(username) {
        this.username = username;
        User.userCount++;
    }

    static getUserCount() {
        console.log(`There are ${User.userCount} users online`);
    }
    sayHello() {
        console.log(`Hello, my username is ${this.username}`);
    }
}

const user1 = new User("spongebob");
const user2 = new User("Patrick");
const user3 = new User("Sandy");

user1.sayHello();
user2.sayHello();
user3.sayHello();
User.getUserCount();
