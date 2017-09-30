// good morning fundamentals!!!

// data
5 + 5;
let result = 5 + 5;

// complex
// structures
// array
let shoppingList = ["beer", "diapers", "cheese"];

// object - fundamental building blocks of anything meaningful in programming
let me = {
  name: "Jacob",
  age: 38
};
// it prevents the object from being reassigned or mutated (object.freeze)
const car = {
  model: "ML350",
  make: "Mercedes",
  cost: 100000
};

// behaviour - functionality
// function - list of instructions assigned to a name or variable

// declaritive function
function multiply(x, y) {
  return x * y;
}

function multiply(x, y) {
  x * y; // creates a value of 30, but it's not persitant
}

function multiply(x, y) {
  console.log( x * y ); // developer purpose
}

let result = multiply(5, 6); // 30
document.write(`The result is: ${multiply(5, 6)} `); // 30
30; // 30

// functions are values
// expression and statement
if (true) {} // statement
5 + 5; // value
"Hello"; // value
multiply(5, 6); // value

// day - html css
// selector
p {
  color: blue;
  font-size: 30px;
  margin: 20px;
}

<p id="unique">The road less travelled.</p>

#unique {
  background-color: yellow;
}

<p id="unique">The road less travelled.</p>
<p class="highlight">The road less travelled.</p>

// an id is meant to only be used once throughout your page, unique
// a class, is meant to be reused
.highlight {
  background-color: yellow;
}

//
