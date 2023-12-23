                               //Variables

//console.log("Hello world")
//
//let age = 21; //numbers
//age = age + 1;
//
//let firstName = "Bro"; //strings
//
//let student = true; //booleans
//
//console.log("Hello", firstName);
//console.log("You are", age, "years old");
//console.log("Enrolled:", student);
//
//document.getElementById("p1").innerHTML = "Hello " + firstName;
//document.getElementById("p2").innerHTML = "You are " + age + " years old";
//document.getElementById("p3").innerHTML = "Enrolled: " + student;



                            //Arithmetic Expressions

// let students = 20;

//students = students + 1;
//students = students - 1;
//students = students * 2;
//students = students / 2;
//let extraStudents = students % 2;

// students += 1;
// students -= 1;
// students *= 2;
// students /= 2;

  /*
      operator precedence
      1. parenthesis ()
      2. exponents
      3. multiplication & division
      4. addition & subtruction
  */
 
// let result = (1 + 2) * (3 + 4);

// console.log(result);





                            // User Input

// How to eccept user input

// EASY WAY with a window prompt

// let username = window.prompt("What's your name?");
// console.log(username);

// DIFFICULT WAY HTML textbox

// let username;

// document.getElementById("myButton").onclick = function () {
    
//     username = document.getElementById("myText").value;
//     console.log(username);
//     document.getElementById("myLabel").innerHTML ="Hello" +  username;
// }





                            // Type Conversion 

                            

            // Type Conversion = change the datatype of a value to another
                        // (strings, numbers, booleans)


// let age = window.prompt("How old are you?");

// age = Number(age);
// age += 1;

// console.log("Happy Birthday! You are", age, "years old");

// let x;
// let y;
// let z;

// x = Number("3.14");
// y = String(3.14);
// z = Boolean("Osh");

// console.log(x, typeof x);
// console.log(y, typeof y);
// console.log(z, typeof z);



                            //  Const  = a variable that can't be changed

// const PI = 3.14159;
// let radius;
// let circumference;

// radius = window.prompt("Enter the radius of a circle");
// radius = Number(radius);

// // 9PI = 420.69;

// circumference = 2 * PI * radius;

// console.log("The circumference is:", circumference);



                            //  Math


// let x = 3.14;
// let y = 5;
// let z = 9;
// let maximum;
// let minimum;

// // x = Math.round(x);
// // x = Math.floor(x);
// // x = Math.ceil(x);
// // x = Math.pow(x, 4);
// // x = Math.sqrt(x);
// // x = Math.abs(x);
// // maximum = Math.max(x, y, z);
// // minimum = Math.min(x, y, z);
// x = Math.PI;

// console.log(x);


                          // Hypoteuse calc practice program


// let a;
// let b;
// let c;

/* a = window.prompt("Enter side A");
a = Number(a);

b = window.prompt("Enter side B");
b = Number(b);

// c = Math.pow(a, 2) + Math.pow(b, 2);
// c = Math.sqrt(c)

c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

console.log("Side C:", c);
*/

// document.getElementById("submitButton").onclick = function () {
  
// a = document.getElementById("aTextBox").value;
// a = Number(a);

// b = document.getElementById("bTextBox").value;
// b = Number(b);

// c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
  
//   document.getElementById("cLabel").innerHTML = "Side C: " + c;

// }




                              //  Counter program #


// let count = 0;

// document.getElementById("decreaseBtn").onclick = function () {
//   count-=1
//   document.getElementById("countLabel").innerHTML = count;

// }
// document.getElementById("resetBtn").onclick = function () {
//   count=0
//   document.getElementById("countLabel").innerHTML = count;
  
// }
// document.getElementById("increaseBtn").onclick = function () {
//   count+=1
//   document.getElementById("countLabel").innerHTML = count;
  
// }



                              //  Random Number



// let x;
// let y;
// let z;

// document.getElementById("rollBtn").onclick = function (){
  
//   x = Math.floor(Math.random() * 6) + 1;
//   y = Math.floor(Math.random() * 6) + 1;
//   z = Math.floor(Math.random() * 6) + 1;

//   document.getElementById("xlabel").innerHTML = x;
//   document.getElementById("ylabel").innerHTML = y;
//   document.getElementById("zlabel").innerHTML = z;
// }




                       //  Useful string propertoes & methods


// let userName = "   Bro Zero   ";
// let phoneNumber = "123-234-3455"

// console.log(userName.length);
// console.log(userName.charAt(1));
// console.log(userName.indexOf("o"));
// console.log(userName.lastIndexOf("o"));
// userName = userName.trim();
// userName = userName.toUpperCase();
// userName = userName.toLowerCase();

// phoneNumber = phoneNumber.replaceAll("-", "");

// console.log(phoneNumber);




                              //  String slicing


// let fullName = "Bek Shox";
// let firstName;
// let lastName;

// // lastName = fullName.slice(4);
// // firstName = fullName.slice(0, 3);

// firstName = fullName.slice(0, fullName.indexOf(" "));
// lastName = fullName.slice(fullName.indexOf(" ") + 1);


// console.log(firstName);
// console.log(lastName);



                              //  Method chaining


// let userName = "bek";

// let letter = userName.charAt(0).toUpperCase().trim();

// console.log(letter);




                              //  If Statement (basic)

/*
let age = 65;

if (age >= + 65){
    console.log("You are a Senior citizen!");
}
else if(age >= 18){
  console.log("You are an Adult!");
}
else if(age < 0) {
  console.log("You haven't been born yet!");
}
else {
  console.log("You are child!");
}


let online = false;

if (online) {
  console.log("You are online!");
}
else {
  console.log("You are offline!");
}
*/



                            // Checked Property

/*
document.getElementById("myButton").onclick = function () {
  
  const myCheckBox = document.getElementById("myCheckBox");
  const visaBtn = document.getElementById("visaBtn");
  const masterBtn = document.getElementById("masterBtn");
  const paypalBtn = document.getElementById("paypalBtn");



  if (myCheckBox.checked) {
    console.log("You are subscribed!");
  }
  else {
    console.log("You are NOT subscribed!");
  }

  if(visaBtn.checked){
    console.log("You are paying with a Visa!");
  }
  else if(masterBtn.checked){
    console.log("You are paying with a MasterCard!");
  }
  else if(paypalBtn.checked){
    console.log("You are paying with a PayPal!");
  }
  else {
    console.log("You must select a payment type!");
  }
}
*/


                            // Switch


/*
let grade = "";

switch (grade) {
  
  case "A":
    console.log("You did Great!");
    break;
  case "B":
      console.log("You did Good!");
    break;
  case "C":
      console.log("You did Okay!");
    break;
  case "D":
      console.log("You passed ...barely!");
    break;
  case "F":
      console.log("You FAILED!");
    break;
  default:
    console.log(grade, "is not a letter grade!");
}
*/
/*
let grade = 44;

switch (true) {
  
  case grade >= 90:
    console.log("You did Great!");
    break;
  case grade >= 80:
      console.log("You did Good!");
    break;
  case grade >= 70:
      console.log("You did Okay!");
    break;
  case grade >= 60:
      console.log("You passed ...barely!");
    break;
  case grade < 60:
      console.log("You FAILED!");
    break;
  default:
    console.log(grade, "is not a letter grade!");
}
*/




                              // AND & OR logical operators


/*
let temp = 12;
let sunny = true;

if (temp >= 0 && temp < 30 && sunny){
  console.log("The weather is good!");
}
else {
  console.log("The weather is bad!");
}
*/
/*
let temp = 23;

if (temp <= 0 || temp <= 30) {
  console.log("The weather is good!");
}
else {
  console.log("The weather is bad!");
}
*/




                          // NOT Logical Operator


/*
let temp = 15;
let sunny = false;

if (!(temp > 0)) {
  console.log("It's cold outside!");
}
else {
  console.log("It's warm outside!");
}

if (!sunny) {
  console.log("It's sunny outside!");
}
else{
  console.log("It's cloudy outside!");
}
*/



                          // Practice
/*
let f = 4;

if (f == 4) {
  console.log("You are in 4th floor");
}
console.log(4==='4');


let n = 6;


if(n % 2 == 0){
  console.log("Even Number");
}
else {
  console.log("odd number");
}

*/

/* 
let A = 8;
let B = 2;
let C = 4;

if (B == A && A == C ) {
  console.log("Teng");
}
else if(A == B || A == C || B == C) {
  console.log(`2ta tomon teng!`);
}
else{
  console.log(`har xil!`);
}
*/



                            //  While loop

/* 
let userName = "";

while(userName == "" || userName == null){
  userName = window.prompt("Enter your Name");
}

console.log("Hello", userName);



                           // do While loop


let userName;

do{
  userName = window.prompt("Enter your Name");
}while(userName == "" || userName == null)

console.log("Hello", userName);
*/


                          //  For Loop

/* 
for(let i = 10; i > 0; i -= 1){
  console.log(i);
}

console.log("Happy Ramadan");
*/


                          // Break & Continue

/* 
for (let i = 1; i <= 20; i += 1){
  if (i == 13) {
    // break;
    continue;
  }
  console.log(i);
}
*/


                        //  Nested loop
/* 
let symbol = window.prompt("Enter a symbol to use");
let rows = window.prompt('Enter # of rows');
let columns = window.prompt('Enter # of colums');

for (let i = 1; i <= rows; i += 1){
  for (let j = 1; j <= columns; j += 1){
    document.getElementById("myRectangle").innerHTML += symbol;
  }
  document.getElementById('myRectangle').innerHTML += "<br>";
}
*/

                      // Practice
// let total = 0

// for (let i = 0; i <= 100; i++) {
//   total = total + i
//   // console.log(i);
// }

// console.log(total);


                        // Function

/* 
startProgram();

function startProgram() {
  let userName = "Bro";
  let age = 21;
  
  happyBirthday(userName, age)
}

function happyBirthday(userName, age) {
  console.log("Happy birthday to you!");
  console.log("Happy birthday to you!");
  console.log("Happy birthday dear", userName);
  console.log("Happy birthday to you!");
  console.log("You are", age,"years old!");
}
*/


                        // Return Statement
/* 
let area;
let width;
let height;

width = window.prompt("Enter width");
height = window.prompt("Enter height");

area = getArea(width, height);

console.log("The area is:", area);

function getArea(width, height){
  return width * height;
}
*/

                      // Ternary Operator(shortcut for an 'if/else statement')
/* 
let adult = checkAge(21);
console.log(adult);

function checkAge(age) {
  
  return age >= 18 ? true : false;
}

checkWinner(true);

function checkWinner(win) {
  win ? console.log("You WIN!") : console.log("You LOSE!");
}
*/


                    // Let vs Var


/* 
let name = "Bro";
var name = "bro"

doSomething();

function doSomething() {
  for (var i = 1; i <= 3; i += 1){
    // console.log(i);
  }
}
console.log(i);
*/


                      // Template literals
/* 
let userName = "Bro";
let items = 3;
let total = 67;

// console.log("Hello", userName);
// console.log("You have", items, "items in your cart");
// console.log("Your total is $", total);


// console.log(`Hello ${userName}`);
// console.log(`You have ${items} items in your cart`);
// console.log(`Your total is $${total}`);

let text =
`  Hello ${userName}<br>
You have ${items} items in your cart<br>
Your total is $${total}`;

// console.log(text);
document.getElementById("myLabel").innerHTML = text;
*/


                    // Format Currency(toLocalString)
/* 
let myNum = .01;

// myNum = myNum.toLocaleString("en-US"); // US English
// myNum = myNum.toLocaleString("hi-IN"); // Hindi
// myNum = myNum.toLocaleString("de-DE"); // Standart German

// myNum = myNum.toLocaleString("de-DE", {style: "currency", currency:"EUR"});
// myNum = myNum.toLocaleString("uzs-UZ", {style: "currency", currency:"UZS"});

// myNum = myNum.toLocaleString(undefined, { style: "percent" });

myNum = myNum.toLocaleString(undefined, { style: "unit", unit: "kilogram"});

console.log(myNum);
*/


                      // Number Guessing Game

/* 
const answer = Math.floor(Math.random() * 10 + 1);
let guesses = 0;

document.getElementById("submitButton").onclick = function () {
  
  let guess = document.getElementById("guessField").value
  guesses += 1;
  
  if (guess == answer) {
    alert(`${answer} is the #. It took you ${guesses} guesses.`);
  }
  else if (guess < answer) {
    alert("Too small!");
  }
  else {
    alert("Too large!");
  }

}
*/



                    // Temperature conversion program

/* 
document.getElementById("submitButton").onclick = function () {
  
  let temp;
  
  if (document.getElementById("cButton").checked) {
    temp = document.getElementById("textBox").value;
    temp = Number(temp);
    temp = toCelsius(temp);
    document.getElementById("tempLabel").innerHTML = temp + "°C";
  }
  else if (document.getElementById("fButton").checked){
    temp = document.getElementById("textBox").value;
    temp = Number(temp);
    temp = toFahrenheit(temp);
    document.getElementById("tempLabel").innerHTML = temp + "°F";
  }
  else {
    document.getElementById("tempLabel").innerHTML = "Select a unit";
  }
  
  
  
  
}

let temp = 32;
temp = toFahrenheit(temp);
console.log(temp);

function toCelsius(temp) {
  return (temp - 32) * (5 / 9);
}

function toFahrenheit(temp) {
  return temp * 9 / 5 + 32;
}
*/



                        // Arrays

/* 
let fruits = ["apple", "orange", "banana"];

// fruits[2] = "coconut";

fruits.push("lemon");    //add an element
fruits.pop();            //removes last element
fruits.unshift("mango"); //add element to beginning
fruits.shift();          //removes element from beginning

let length = fruits.length;
let index = fruits.indexOf("kiwi");

console.log(index);
*/



                        // Loop through an array

/* 
let prices = [5, 10, 15, 20, 25];

// for (let i = prices.length - 1; i >= 0; i -= 1){
  //   console.log(prices[i]);
  // }
  
  for (let price of prices) {
    console.log(price);
  }
  */


                        // Sort an array of strings

/* 
let fruits = ["banana", "apple", "orange", "mango"];

// fruits = fruits.sort();
fruits = fruits.sort().reverse();

for (let fruit of fruits) {
  console.log(fruit);
}
*/













