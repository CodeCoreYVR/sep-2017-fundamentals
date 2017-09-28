// good evening fundamentals!

5 + 5; // 10
let result = 5 + 5; // variable
window.alert(result);

// multiple values being assigned to one variable
let name = "Jacob";
let age = 38;

// arrays - indexed list of information
let names = ["Jacob", "Tran"]; // data structure


// check if we won the lottery
// we need to scan through our numbers to see if there is match
// loop - for .. of (arrays)
// for (element of array) {}

// for (let item of shoppingList) {}
// for (let name of names) {}

let winningNumbers = [12, 45, 35, 16, 6, 43];

for (let number of winningNumbers) {
  console.log(number);
}

let sales = [12, 45, 35, 16, 6, 43];
let total = 0;

for (let sale of sales) {
  console.log(sale);
  total += sale;
}

console.log(`The total of all sales was: ${ total }`);
// for (let i=0; i<winningNumbers; i++) {
//   console.log(winningNumbers[i]);
// }

// objects - the fundamental building blocks of anything meaningful in programming

// objects are another form of a data structure
// 1. oranges
// 2. apples
// 3. pears
// 4. beer
// 5. chips

// property: value

// properties on the left hand side
// values associated with that property on the right hand side
let me = {
  age: 38,
  hairColour: "black",
  name: "Jacob",
  weight: 140
};

// how do we access the values
// 1. dot operator
me.age; // 38
// 2. ["string"]
me["weight"]; // 140
// 3. variable
let property = "name";
me[ property ]; // "Jacob"

// how do we iterate over an object
// for..in
// for (property in object) {}
// let property will contain a string representation of property name
for (let property in me) {
  console.log(property); // property name
  console.log(me[ property ]); // property value
}

// complex data structures
let tictactoe = [
  ["X", "O", "X"],
  ["O", "X", "0"],
  ["O", "X", "O"]
];

let dog = {
  name: "Summer",
  baby: {
    name: "Junior"
  }
}

// iterate over a nest structure
// recursion
for (let property in dog) {
  // Array.isArray(property) // if this equates to true, then it is in fact an array

  if (typeof property == "object") {
    for (let property2 in property) {
      // values in your baby
    }
  }
}


let teachers = [
  {}, {}, {}
];

let dog = {
  name: "Summer",
  tricks: ["jump", "sit", "beg"]
};

// "hello"
// i want to find out who won the letters election
// hash table
// h: 1
// e: 1
// l: 2
// o: 1

// step 1, step through each individual letter in the word
// strings and arrays are closely related.
// strings, arrays of letters
// how do we turn a string into an array?
// split

// step 2, create an object to track which letter occurs most often.
let word = "hello";
word.split(); // ["hello"]
let letters = word.split(""); // ["h", "e", "l", "l", "o"]

let occurrences = {
  // "h": 1,
  // "e": 1,
  // "l": 2,
  // "o": 1
};

// occurrences[ "h" ] = 1;
// occurrences[ "e" ] = 1;
// occurrences[ "l" ] = 2;
// occurrences[ "o" ] = 1;

for (let letter of letters) {
  console.log(letter);
  // if the letter doesn't exist in our object yet, create it and set it to one
  if (occurrences[letter] == undefined) {
    occurrences[ letter ] = 1;
  } else {
    // if it already exists, increment it
    occurrences[ letter ] += 1;
  }
}

console.log(occurrences);

// functions
function sayHello() {
  // list of instructions
  console.log("Hi!");
}

sayHello();
sayHello();
sayHello();
sayHello();
sayHello();
sayHello();
sayHello();
sayHello();
sayHello();
sayHello();
sayHello();
sayHello();
sayHello();

function power(x, y) {
  return x ** y;
}

function power(x, y) {
  let result = x ** y;
  return result;
}

// functions can become values
//5;
//"Hello";
power(2, 3); // 16
let result = power(2, 3);
console.log( power(2, 3) );

let result = sayHello(); // undefined
console.log( sayHello() ); // undefined

// function expression
// on the right hand side, this is called an anonymous function because it is a function that has no name

// control the scope of this variable
// how far reaching can this code be accessed
let multiply = function(x, y) {
  return x * y;
};

multiply(5, 3); // 15

// arrow syntax
let add = (x, y, z) => { return x + y + z };




//
