// higher order functions - are functions that take in a function as an argument or return a function as output

// regular function
function sayHello() {
  console.log("Hi!");
}

function sayGoodbye() {
  console.log("Ciao!");
}

// higher order function
function call(fn) {
  fn(); // executes the function within it's code block
}

call( sayHello ); // specifying a higher order function called "call"
sayHello();

// higher order functions with additional arguments
function callThreeTimes(fn) {
  fn();
  fn();
  fn();
}

callThreeTimes( sayHello );
callThreeTimes( sayGoodbye );

function callMultipleTimes(fn, number) {
  // for loop
  for (let counter=0; counter<number; counter++) {
    fn();
  }
}

// TDD
callMultipleTimes(sayHello, 5); // "Hi!" five times
callMultipleTimes(sayGoodbye, 10); // "Ciao"!" ten times







//
