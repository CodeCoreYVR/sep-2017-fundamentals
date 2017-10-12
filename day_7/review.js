// good evening fundamentals!

// html & css
// box model
// positioning
// floating
// z-index

// recipe card
// border: dashed

// javascript - jquery

// data structures
let name = "Jacob";
let names = ["Jacob", "Tran"]; // array
names[0]; // "Jacob"
names[1]; // "Tran"

let me = {
  name: "Jacob",
  age: 38
};

// mapping
// input
[1,2,3,4,5];

// function - list of instructions
function map(arr) {
  // create an empty array that will store the result of our calculations
  let results = [];

  // iterate over the array that was passed in
  // for..in iterate over objects
  // for..of iterate over arrays
  for (let element of arr) {
    // we want to square each element in the array of numbers
    // we use the push method on the array object to store the result of the calculation into the data structure, results
    results.push( element * element );
  }

  // this allows the function to be evaluated to something meaningful when we call it
  return results;
}

let name = "Jacob";
const multiply = function(){};

// function expression syntax
const map = function(arr) {
  // create an empty array that will store the result of our calculations
  let results = [];

  // iterate over the array that was passed in
  // for..in iterate over objects
  // for..of iterate over arrays
  for (let element of arr) {
    // we want to square each element in the array of numbers
    // we use the push method on the array object to store the result of the calculation into the data structure, results
    results.push( element * element );
  }

  // this allows the function to be evaluated to something meaningful when we call it
  return results;
};


// output
let numbers = [1,2,3,4,5];
let results = map(numbers);
let results = map( [1,2,3,4,5] ); // [1,4,9,16,25]

// functional programming
// higher-order functions - a function that takes a function in as an argument
function map(arr, fn) {
  let results = [];

  for (let element of arr) {
    results.push( fn( element ) ); // <- confused? search and replace
  }

  return results;
}

function square( number ) {
  return number ** 2;
}

function addTwo( number ) {
  return number + 2;
}

map([1,2,3,4,5], square); // [1,4,9,16,25]
map([1,2,3,4,5], addTwo); // [3,4,5,6,7]

// built-in higher-order functions
// timing functions
// setTimeout(fn, delay);
setTimeout(function(){
  console.log("Hi!");
}, 1000);

let intervalId = setInterval(function() {
  console.log("Hi!");
  clearInterval(intervalId);
}, 1000);

// event loop -> order wheel at a restaurant
// external libraries
// lodash.js
let result = _.flatten([[nil,nil,nil][nil,nil,nil][nil,nil,nil]]);
// [nil,nil,nil,nil,nil,nil,nil,nil,nil]


//
