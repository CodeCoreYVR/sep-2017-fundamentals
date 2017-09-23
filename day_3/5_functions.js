// functions - solves an arguments
// repeatable block of code

// daily grind

// routine

// sleep
// groom
// eat
// bathroom
// breathe

// Monday to Friday

// monday
console.log("sleep");
console.log("wakeup");
console.log("have coffee");
console.log("eat breakfast");
console.log("get changed");
console.log("catch the bus");
// tues
console.log("sleep");
console.log("wakeup");
console.log("have coffee");
console.log("eat breakfast");
console.log("get changed");
console.log("catch the bus");
// wed
console.log("sleep");
console.log("wakeup");
console.log("have coffee");
console.log("eat breakfast");
console.log("get changed");
console.log("catch the bus");


// to create a list of instructions that you can contain in a block of code, that can referenced by name
function morning() {
  console.log("sleep");
  console.log("wakeup");
  console.log("have coffee");
  console.log("eat breakfast");
  console.log("get changed");
  console.log("catch the bus");
}

// to call a function we use the function name followed by ();

// monday
morning();
// tuesday
morning();
// wednesday
morning();

// push is a function
// shoppingList.push();
// shoppingList.unshift();
//
// // is length a function, it is not, it is a property
// shoppingList.length;
// person.name;
//
// shoppingList.push();

// function declaration
// provide an argument
function addOne(number) {
  // this function will add one
  console.log(number + 1);
}

// function call, i would put a value inside the brackets
addOne(10);

function add(number1, number2) {
  console.log(number1 + number2);
}

add(5,6);
add(10,20);

let result = 0;

function add(number1, number2) {
  let sum = number1 + number2;
  return sum; // will push out from this function a value
  // this function will evaluate out to a value
}

result = add(100, 300);

// write a function that will square a number that it is given and log it to the console
function square(number) {
  console.log(number * number);
  // console.log(number ** 2);
}

square(5);

// write a function that will multiple 2 numbers together and store the result in a variable

// ECMAScript 6.0

function multiply(number1, number2) {
  let result = number1 * number2;
  return result
}

function multiply(x, y) {
  return x * y;
}

// function expressions
// 5 + 5;
// 10;
// if (true) // not an expression

// function expression, an anonymous function being assigned to a variable
let multiply = function(x, y){
  return x * y;
};

let result = multiply(5, 6);
console.log(result); // 30

// scope - where you code reach?


// write a function using the function expression syntax that takes in 3 arguments:  x, y, z and produces the sum of those numbers.  store the result in a variable and log it to the console.
let add = function(x, y, z) { return x + y + z };

let add = function(x, y, z) {
  return x + y + z;
};

let name = "Jacob";


// arrow syntax

let add = (x, y, z) => { return x + y + z };

let result = add(3,4,5);
console.log(result);

console.log( add(3,4,5) );

//
