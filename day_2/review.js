// good evening fundamentals!
// Jacob Tran

// review of Tam's class on Saturday
// JavaScript - written Brenden Echt
// written in 10 days Netscape (now Mozilla/Firefox)

// ECMAScript 6.0

// Comments
/*
   Allow to communicate to fellow team members
   -future users of our code
   -to ourselves
 */

// interpreted

// how do we speak to the computers
// programming language

// binary - punch card system
// present / absent
// on / off
// true / false
// 0 or 1

// truthy language

true == 1;
false == 0;

// data, if you own the data, you have a lot power
// Google - search engine, office suite of tools
// -marketing machine,  maps, slides
// Facebook - Mark Zuckerberg, whatsapp, instagram
// 2 billions users

5 + 5; // semi colon - terminates a line of code
10 - 2;
4 * 2;
12 / 3;
10 % 3; // remainder, modulo

// variable - changes or can be changed
// you can store data in a variable.  that data is allowed to be changed

// var name = "Jacob"; // ECMAScript 5.0
let light = true;

let name = "Jacob";
let age = 38;
let result = 5 + 5;

light + result;

true + 10; // true10
light + result;
true == 1;
false == 0;

true + 10; // 11

// types of data
// strings - string of characters, words, text, sentences
let name1 = "Jacob";
let name2 = 'Jacob';
let name3 = `Jacob`; // backtick, ECMAScript 6.0
// above tab key on your keyboard

// booleans - have 2 possible states
// true or false
let light = true;
let darkness = false;

// numbers, integers - whole numbers
let age = 38;

// decimal numbers, floating point: float, fraction, double
let pi = 3.14159;

// logic gating
let year = 2014;

// if the condition inside the brackets is met, run the list of instructions written between the curly braces
if (year == 2014) { // the double equals checks for equivalency
  // this is my car
}

// == equal to
// > greater than
// < less than
// >= greater than or equal to
// <= less than or equal to
if (year > 2015) {
  // the car is new
}

if (year < 2000) {
  // this car is old
}

if (year > 2015) {
  // the car is new
} else {
  // the car is old
}

if (year > 2015) {
  // the car is new
} else if (year < 2000) {
  // the car is old
} else {
  // default code
}

// loops
// let the computer do the hard work for us

1;
2;
3;
4;
5;
6;
7;
8;
9;
10;

// while
while (true) {
  // infinite loop
}

let counter = 0;
counter = 10;

counter = counter + 1; // increase the counter variable by taking it's existing value and adding one to it
counter += 1; // short form for incrementing our variables
counter++; // even shorter form for incrementing our variables

let counter = 0;

// this is no longer an infinite loop
while (counter < 10) {
  console.log( counter );
  // change the counter variable
  // increment the counter variable
  counter++;
}

// for loop
for (let counter = 0; counter < 10; counter++) {
  console.log( counter );
}




















//
