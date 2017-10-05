// good evening everyone!
// review

// Day 1 - Tam, basics of javascript
let name = "jacob";
// data types - strings, numbers, booleans

// logic gating
if (true) {
  // code block
}

if (1 > 2) {
  // code block
} else {
  // code block
}

if (1 > 2) {
  // only one of these gates can be entered
} else if (2 >= 3) {
  // only one of these gates can be entered
} else {
  // only one of these gates can be entered
}

// advanced logic gating
// switch case
// ternary

// loops - make the computer do the hard work
let counter = 1;

while (counter <= 10) {
  console.log(counter);
  counter++;
}

// Day 2 - html
<html>
  <head></head>
  <body></body>
</html>

// recipe page: ul, ol, li
// form: input, label, textarea, div

// Day 3
// data structures
let item = "beer";
let item2 = "cheese";
let item3 = "bread";
                  //  0         1         2
let shoppingList = ["beer", "cheese", "bread"];
let shoppingList[0]; // "beer"

for (let item of shoppingList) {
  console.log(item);
}

for (let counter=0; counter<shoppingList.length; counter++) {
  console.log(shoppingList[counter]);
}

let row1 = ["x", "o", "x"];
let row2 = ["o", "x", "o"];
let row3 = ["o", "x", "o"];

let tictactoe = [row1, row2, row3];

let tictactoe = [ row1,
                  row2,
                  row3  ];

let tictactoe = [ ["x", "o", "x"],
                  ["o", "x", "o"],
                  ["o", "x", "o"]  ];

// tictactoe[row][col]
tictactoe[1][1];

// object
let person = {
  name: "Jacob",
  age: 38
};

// 0: "beer"
// 1: "cheese"

person.name;
person["name"];

let property = "name";
person[ property ];

let person = {
  name: "Jacob",
  age: 38,
  baby: {
    name: "Jr",
    age: 0
  },
  hobbies: ["bjj", "rock climbing", "coding"]
};

// JSON - JavaScript Object Notation

// Day 4 - Cascading Style Sheets
// inline stlying
<h1 style="color: orange">Trump Wins Presidency</h1>

<head>
  <style>
    h1 {
      color: orange;
    }
  </style>
</head>

<head>
  <link href="style.css" rel="stylesheet">
</head>

// external file called style.css
h1 {
  color: orange;
}

p {
  color: pink;
  font-size: 20px;
  margin: 10px;
  width: 100px;
  height: 200px;
  border-radius: 50px;
}

// Day 5 - objects, functions, higher-order functions, built-in higher-order fn, external libraries
const car = {
  // data values
  make: "Tesla",
  model: "Model X",
  capacity: 7,
  speed: 10,
  // behaviours, method
  drive: function() {
    // this - where does this method exist?
    console.log(`I am going ${ this.speed } km/h`);
  },
  // get rid of : function
  stop() {
    this.speed = 0;
    console.log(`RRRchhh...`);
  }
};

// (); executes the function associated with that property name
car.drive();

function sayHello() {
  console.log("Hi!!");
}

sayHello();
sayHello();
sayHello();

function multiply(x, y) {
  return x * y;
}

// when we use the keyword return we can change the value that is returned from the function
multipy(5, 6); // 30
30;

// higher-order function is a function that takes in a function as an argument
function calc(fn, number1, number2) {
  return fn(number1, number2);
}

// if no return keyword
calc(multiply, 5, 6); // undefined
calc(multiply, 5, 6); // 30

function divide(x, y) {
  return x / y;
}

calc(divide, 10, 2);

// mapping
// [1, 2, 3,  4,  5]
// [1, 4, 9, 16, 25]

// 2 -> 4
// 2 * 2, square it
function square(number) {
  return number ** 2;
}

square(2); // 4

let numbers = [1,2,3,4,5];
let results = [];

for (let number of numbers) {
  results.push( square(number) );
}

console.log( results ); // [1,4,9,16,25]

function map(fn, arr) {

  let results = [];

  for (let element of arr) {
    results.push( fn( element ) );
  }

  return results;
}

map(square, numbers); //[1,4,9,16,25]
map(square, [1,2,3,4,5]); //[1,4,9,16,25]

map(function(number){ return number ** 2 }, [1,2,3,4,5]);

// recursive function
function recursive() {
  recursive();
}

[1,2,3,4,5].forEach(function() {});
setTimeout(function(){}, 1000); // will only run once
setInterval(function(){}, 1000); // will run forever

let intervalId = setInterval(function(){
  clearInterval(intervalId); // we can stop the interval by clearning it
}, 1000);

for (let i=0; i<3; i++) {
  console.log( setTimeout(function(){}, 1000) );
}

// lodash.js
<head>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.4/lodash.js"></script>
  <script>
    window.alert("annoying popup");
    let tictactoe = [
      [null,null,null],
      [null,null,null],
      [null,null,null],
    ];
    let result = _.flatten(tictactoe); // [null,null,null,null,null,null,null,null,null]
  </script>
</head>


// classes
// blueprint
// cookie cutter
// idea
// classes describe objects, but they are not the object themselves

// blueprint describes how the house should look, be built
// but you cannot live in a blue print

// in order to live in a house you must construct it

class Cookie {
  constructor(sugar, flour, glutten) {
    // instance variables
    this.sugar = sugar;
    this.flour = flour;
    this.glutten = glutten;
  }
}

let oreo = new Cookie(15, 10, true);
let oatmeal = new Cookie(5, 10, false);
let doubleChocolateChip = new Cookie(30, 20, true);

console.log(oreo);
// let shoppingList = new Array();
// let me = new Object();

// Day 6
// html css
// box model
// grid
// position
// flex





//
