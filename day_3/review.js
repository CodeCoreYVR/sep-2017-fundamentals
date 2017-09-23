// good morning fundamentals!

// saturday - tam kbieli

// how can we run javascript?
// 3 ways

// 1. run it through a website that host a javascript interpreter
// - repl.it
// - jsbin.com
// - codepen.io


// 2. javascript console
// - a developers tool to check if any messages were sent out from the code
// - in addition, it also acts as an interpereter
// - error messages
// cmd + shift + j or F12
let name = "Jacob";

console.log("is this code being reached?");
console.log(name);

while (true) {
  console.log("am i getting in here?");
}

// 3. on a server (apache?)
// node.js
// beyond the browser

// $ node
// > 5 + 5;

// bottle of beer on the wall
// 99 bottles of beer on the wall
// 99 bottles of beer
// take one down
// pass it around
// 98 bottles of beer on the wall
// .... 0 bottles of beer

// count down from 99 to zero

// 1. for loop - work smarter not harder, and let the computer do the difficult part
// 2. while loop - work smarter not harder, and let the computer do the difficult part
// 3. brute force

// for (initialization; condition; increment/decrement)
for (let counter=99; counter >= 0; counter--) {
  console.log(counter);

  // string concatenation
  console.log(counter + " bottles of beer on the wall");

  // string interpolation - ${}
  // ""
  // ''
  // `` - above the tab key on the keyboard
  console.log(`${counter} bottles of beer on the wall`);
}

// string interpolation allows us to put expressions inside the curly braces
console.log(`${5 + 5} bottles of beer on the wall`);











//
