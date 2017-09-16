// we can use let, const or var to declare variables in Javascript

// let and const are ES6 features
// var has been around for a long since early versions of Javascript, it still
// works but we recommend using let and const

// use const when you don't expect the variable to change, for example:
const name = 'Tam';
alert(name);

// we use the single equal `=` to declare (or assign) a variable in Javascript
// and most other languages. Notice that it's different from the comparison
// operators `==` and `===`

// it's recommended to up to spaces around operators include `=` and `===` to
// make the code easier to read.


// we use let when we expect the value of the variable to change later in my
// my program, for instance:
let x = 1;
console.log(x);
x = x + 5;
console.log(x);

// the convention is to use camel case for naming multi-word variables in
// Javascript
const firstName = 'Tam';

// Rules for naming variables:
// 1- start with a lower case unless you're defining a class (will come later)
// 2- you can have a number in the name but it can't be the first character
// 3- you can't have a space in the name, only a limited set of non-letter and
//    non-number characters are allowed: you can use $, _
// 4- Aim to use camelCase convention as much as possible
