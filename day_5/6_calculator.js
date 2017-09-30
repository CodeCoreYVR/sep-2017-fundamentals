// add
function add(x, y) {
  return x + y;
}

// subtract
// create a subtract function
// test out your higher order function calc with your new subtract function, don't forget your returns...
function subtract(x, y) {
  return x - y;
}

// multiply
function multiply(x, y) {
  return x * y;
}
// divide
function divide(x, y) {
  return x / y;
}

// add(5, 6); // 11

// console.log(`The sum of 5 and 6 is ${ add(5, 6) }`);
// window.alert(`The sum of 5 and 6 is ${ add(5, 6) }`);

// higher order function called calc
function calc(operation, number1, number2) {
  // add(5, 6);
  return operation(number1, number2);
  // return 11;
  // the calc function is not returning anything meaningful
}

calc(add, 5, 6); // 11
calc(subtract, 10, 2); // 8
calc(multiply, 4, 4); // 16
calc(divide, 100, 5); // 20
