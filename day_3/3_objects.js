// objects - the fundamental building blocks of any meaningful in programming

// person
         //      0       1      2
         //  name   profession age
let person = ["Jacob", "Coder", 38, true, ["BJJ", "Rock Climbing"]]

// properties and values
// let person = {}; // object initializer
// let person = new Object();

// this is a person object
let person = {
  // it contains properties and corresponding values
  // name is a property
  // "Jacob" is it's value
  name: "Jacob",
  profession: "Coder",
  age: 38
};

// dot operator to access data in our object
// person[0]

// i can access the data associated with name by using the dot operator
// object.property will return it's value, therefore
console.log( person.name ); // "Jacob"
console.log( person.profession ); // "Coder"
console.log( person.age ); // 38

// make a "Me" object that describes you
// access the values in your object

// you can add to your object even after it's been created
person.hobby = "Rock Climbing";
console.log(person);

delete person.age;
console.log(person);

// with an array how do you add items to your array after it's been created?
// shoppingList.push("yogurt");

// arrays - for..of
// object - for..in







//
