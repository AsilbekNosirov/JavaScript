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











