// good morning fundies!!!

// javascript
// data
5 + 5; // 25
// persist
let day = true;
// const
// var

// complex data
let shoppingList = ["beer", "jerky"];

// object
let dog = {
  hair: "blonde",
  age: 2,
  tricks: ["sit", "beg", "roll over"]
};

// functions
// simple
function sayHello() {
  console.log("Hi");
}

sayHello();
sayHello();
sayHello();
sayHello();

// higher order functions (complex functions)
function calc(fn, number1, number2) {
  return fn(number1, number2);
}

function add(number1, number2) {
  return number1 + number2;
}

add(5, 6); // 11
calc(add, 5, 6);

// the number 5 is a value
// the string "Jacob" is a value
// functions are values

// functional programming - libraries
// built-in higher order functions
setTimeout(sayHello, 1000);

function sayHello() {
  console.log("Hi");
}

setTimeout(function() {
  console.log("bye!");
  // 5 + 5;
  // return 10;
}, 1000);

// lodash

// write me a function that will return true if the number being passed in is even. it will return false if the number being passed in is odd.
// is it even? true or false, boolean
function isEven(number) {

  // if (number is even)
    // return true;
  // if the number divided by two give you a remainder of zero, it is even
  if (number % 2 === 0) {
    return true;
  } else {
    // the number produced a remainder, therefore it is odd
    return false;
  }

  // return (number % 2 === 0); // shorter form
}

isEven(10); // true
isEven(9); // false

// use a higher order function to filter out an array of numbers based on a simple function criteria.
[1,2,3,4,5]
[2,4] // after filtering my array with isEven
[1,3,5] // after filtering my array with isOdd

// function isArrayEven() {}
// function fitlerArray() {}
function filter(fn, arr) {
  let results = [];

  // iterate over the array
  for (let element of arr) {
    // apply the fn on the element, if the result is true, i want to push that number into a results array
    // if (fn(element) === true) {
    if (fn(element)) {
      results.push(element);
    }
  }

  return results;
}

filter(isEven, [1,2,3,4,5]); // [2,4]

function isOdd(number) {
  return (number % 2 != 0);
}

filter(isOdd, [1,2,3,4,5]); // [1,3,5]








//
