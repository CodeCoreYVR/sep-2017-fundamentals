// THE EVENT LOOP!!!!!
// javascript gets interpreted twice

// 1st time
// functions, higher order functions, classes, event loop

// 2nd times
// variables, loops, console.log

// javascript isn't synchronous, asynchronous

// timing functions

console.log("a");

setTimeout(function(){ console.log("b") }, 1000);

console.log("c");

// create a higher order function that takes in three orders: small order, big order, medium order
// chef should cook it in order of size (small, med, big)
function small() {
  console.log("salad");
}
function big() {
  console.log("steak");
}
function medium() {
  console.log("potatoes");
}

function chef(small, big, medium) {
  small();
  setTimeout(big, 1000);
  medium();
}

// option 2

function small() {
  console.log("salad");
}
function big() {
  console.log("steak");
}
function medium( fn ) {
  console.log("potatoes");
  fn();
}

function chef(small, big, medium) {
  small();
  // callback function
  medium( big );
}

// setInterval




function sum(x, y) {
  return x + y;
}
sum(5, 6); // 11

// function setInterval() {
//   return currentOrder+1;
// }

let counter = 0;

let intervalId = setInterval(function(){
  console.log("Hello!!!");
  counter++;

  if (counter > 10) {
    clearInterval(intervalId);
  }
}, 1000); // unique id



//
let intervalId = setInterval(function(){
  let intervalId2 = setInterval(function(){
    document.write(".");
  }, 1000)

  document.write("<br>");
}, 1000);
