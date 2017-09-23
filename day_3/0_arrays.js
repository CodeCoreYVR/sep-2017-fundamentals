// arrays

5 + 5;
let result = 5 + 5;
// persistence - stays

// memory
// one value for one variable
let name = "Jacob";
let dog = "Summer";
let teacher = true;
let weight = 140;

// data structures
// arrays - indexed list of information
// ordered lists - ol

// shopping lists
1. milk
2. eggs
3. bread
4. butter
5. coffee
6. diapers
7. beer

let first = "milk";
let second = "eggs";
let third = "bread";
let fourth = "butter";
let fifth = "coffee";
let sixth = "diapers";
let seventh = "beer";

// array
let shoppingList = new Array();
// array initializer
//                    0      1         2         3        4         5         6
let shoppingList = ["milk", "eggs", "bread", "butter", "coffee", "diapers", "beer"];
let fullName = ["Jacob", "Tran"];

// access items in an array
// we put inside the [] a number, or an index, or an address
shoppingList[0]; // "milk"

// the first item on the list will have have an address of zero, not one
shoppingList[1]; // "eggs"

// make an array that has all the things you need to do this weekend
// 1. what are the things you need to do?
// grocery shopping
// laundry
// go to the gym
// coding
// go for a walk
// sleep

let toDoList = [
                  "grocery shopping", // 0
                  "laundry", // 1
                  "go to the gym", // 2
                  "coding", // 3
                  "go for a walk", // 4
                  "sleep" // 5
                ];

// i want to know the third thing i need to do this weekend
toDoList[2]; // "go to the gym"

// i forgot to add breakfast to the list, i want it to go before "grocery  shopping"
// i forgot to add dinner to the list, i want it to go before "sleep"

// push
// arrays methods - allow you to manipulate your array even after it's been created
// to run a method we use .<method name>();
toDoList.push("dinner");
// this will push into the array "dinner"
// the "dinner" will appear at the end of the array

toDoList.splice(5, 0, 'dinner');

// push it to the start of the array
toDoList.unshift("breakfast");






















//
