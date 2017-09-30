let numbers = [1, 2, 3, 4, 5];
// mapping - same structures different values
// let squareNumbers = [1, 4, 9, 16, 25];

let results = [];

// arrays iteration: for..of
for (let number of numbers) {
  results.push( number * number );
}

console.log( results );

// using a function
function square( number ) {
  return number ** 2;
}

for (let number of numbers) {
  results.push( square(number) );
}

console.log( results );

// using a higher order function
function square( number ) {
  return number ** 2;
}

function map(fn, arr) {
  let results = [];

  for (let element of arr) {
    results.push( fn(element) );
  }

  return results;
}

// TDD - Test driven development
map(square, numbers); // [1,4,9,16,25]



// write a higher order function, that takes an addOne function and an array of numbers
// input [1,2,3,4,5]
// output [2,3,4,5,6]

let numbers = [1,2,3,4,5];

1 + 1;
2 + 1;
3 + 1;
4 + 1;
5 + 1;

function addOne( number ) {
  return number + 1;
}

addOne(1);
addOne(2);
addOne(3);
addOne(4);
addOne(5);

// iteration with arrays for..of
// i need a variable with an empty array to store the results of my calculation and make it persist
let results = [];

for (let number of numbers) {
  results.push( addOne( number ) );
}

// higher order function
function map( fn, arr ) {
  let results = [];

  for (let element of arr) {
    results.push( fn(element) );
  }

  return results;
}

map(addOne, numbers); // [2,3,4,5,6]









let results = [2,3,4,5,6];


















//
