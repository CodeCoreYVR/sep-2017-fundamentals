// array for..of
// object for..in

let player = {
  name: "Wayne Gretzky",
  age: 65,
  team: "New York Rangers",
  weight: 180,
  birthplace: "Ontario",
  skill: "Passing"
}

player.name;
player.age;

player["name"];
player["age"];

let property = "name";
player[ property ];
player[ "name" ]; // "Wayne Gretzky"

// for each property in our player
for(let property in player) {
  console(typeof property); // string
  console.log(property); // this will return our property name
  console.log( player[ property ] ); // but will return our corresponding value?????
}

// i want to print out all the properties and values of my object using an iterator
let dog = {
  name: "Summer",
  breed: "Golden Doodle",
  age: 2,
  legs: 4,
  eyeColour: "brown",
  trick: "sit"
}

// what is my dog's name
console.log( dog.name ); // dot operator allows us to access the value

// what is my dog's name, using a different method
console.log( dog["name"] ); // the square bracket method takes in a string to grab the value

// what is my dog's name using a third method, involve a variable
let property = "name";
console.log( dog[ property ]);
// console.log( dog[ "name" ]);

// iterator over our object and print out all the properties
for (let property in dog) {
  console.log(property); // this variable property will return a string
  console.log( dog[ property ] );

  console.log(`${property}: ${dog[property]}`);
}

// complex data structure using objects


let dog = {
  name: "Summer",
  breed: "Golden Doodle",
  age: 2,
  legs: 4,
  eyeColour: "brown",
  tricks: ["sit", "stand", "roll over", "beg"],
  baby: {
          name: "Winter",
          age: 0,
          colour: "white"
        }
};


// JavaScript Object Notation == JSON
// Facebook, Twitter, Amazon 







//
