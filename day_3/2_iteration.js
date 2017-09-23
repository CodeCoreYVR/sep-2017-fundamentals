// iteration
// iterating over an array, letting the computer do the hard work

// loops and data structures
let number = [1, 2, 3, 4, 5];
// what's the last number on the list
number[4]; // 5, because we start counting from 0


// lotto 6/49 numbers
// plural
let numbers = [42, 15, 34, 22, 13, 48];

numbers[0];
numbers[1];
numbers[2];
numbers[3];
numbers[4];
numbers[5];

// for..of // to iterate over an array
// for each number in my numbers array
// singular
for (let number of numbers) {
  console.log("checking if the number is a winning number...")
  console.log(number);
}

// for (let counter=0; counter <= numbers.length; counter++) {
//   console.log("checking if the number is a winning number...")
//   console.log(numbers[counter]);
// }

//
// does length refer to the number of characters
let shoppingList = [];
let toDoList = [];
shoppingList.length; // what are the number of items in our array
toDoList.length; // what are the numbers of items in our array

let name = "Jacob"; // a string
name.length; // returns the number of characters in a string

// what is the sum of all the numbers i chose for 6/49
let numbers = [42, 15, 34, 22, 13, 48];

// 42 + 15 + 34 + 22 + 13 + 48 = ???

// iterator
let sum = 0;

for (let number of numbers) {
  sum += number;
}

console.log(sum);

// 2 dimensional arrays
let election = [
  [298347, 28394, 234897], //  BC
  [8945, 38493, 2894], // AB
  [289343, 29384, 29384] // ON
];

// sum of all votes in these 3 provinces
298347 + 28394 + 234897 + 8945 + 38493 + 2894 + 289343 + 29384 + 29384 = ???

// what is the total number of votes in bc
let bc = [298347, 28394, 234897] //  BC
let sum = 0;

for (let city of bc) {
  sum += city;
}

console.log(sum);

// how do we step through each province, list out the array for each province
for (let province of election) {
  console.log(province); // will log out each individual array or row

  // console.log(province[0]);
  // console.log(province[1]);
  // console.log(province[2]);

  // province produces an array
  // therefore we can use another for loop to step through that array
  for (let city of province) {
    sum += city;
  }
}

console.log(sum);

// for (let counter=0; counter <= election.length; counter++) {
//   for (let counter2=0; counter2 <= election[counter].length; counter2++) {
//     console.log(election[counter][counter2]);
//   }
// }

let family = [
  ["Jacob", "Coder"],
  ["Anthony", "Doctor"],
  ["John", "System Architect"],
  ["Theresa", "Teacher"]
];

// "Jacob is a Coder"...
let counter = 0;

for (let member of family) {
  console.log(counter + ": " + member);
  // console.log(`${counter}: ${member}`);
  counter++;
}


let family = [
  ["Jacob", "Coder"],
  ["Anthony", "Doctor"],
  ["John", "Systems Architect"],
  ["Theresa", "Teacher"]
];
let counter = 0;

for (let member of family) {
  console.log(counter + ": " + member);
  // console.log(`${counter}: ${member}`);
  // we know that member is an array
  console.log(`${member[0]} is a ${member[1]}`)

  typeof member; // object

  // i can loop through the details of each member of the family
  for (let detail of member) {
    console.log(detail);
  }

  counter++;
}

// objects





//
