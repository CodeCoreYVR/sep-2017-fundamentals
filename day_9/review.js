// good evening fundies!

// day 1
// master tam
// javascript - prolific language in the world
// it is the only scripting language that is native to the browser

// netscape, brendan eich
// 10 days
// front-end web dev
// back-end web dev
// mobile native app development
// robotics
// video gaming 2D / 3D

5 + 5;

// data
let result = 5 + 5;
// var
// const pi = 3.141;

// conditionals & logic gating
if (true) {
  // do something
}

if (false) {
  // don't run this code
}

let year = 2017;

if (year > 2017) {
  console.log("future");
} else if (year > 2000) {
  console.log("near past");
} else {
  console.log("distant past");
}

// switch case
// terniary operator
// (true) ? run this code : run that code;

// loops
let counter = 0;

while (counter < 10) {
  counter++;
}

for (let counter = 0; counter < 10; counter++) {
  // do something
}

// day 2
// HTML CSS
// HYPERTEXT MARKUP language
// hyper - jumping from one location to another quickly

// anchor element is made up of an open and closing tag
// a tag name
// href attribute
// value google.com
<a href="http://google.com/">This is a link to google</a>
<form>
  <input type="text">
  <input type="submit">
</form>

// day 3
// data structures
let item1 = "bread";
let item2 = "milk";
let item3 = "cheese";

// arrays
let shoppingList = ["bread", "milk", "cheese"];

// objects - the fundamental building blocks of anything meaningful in code
const me = {
  name: "Jacob",
  age: 38
};

me.name; // "Jacob"

const dog = {
  name: "summer",
  tricks: ["sit", "stand", "roll over"],
  puppy: {
    name: "junior"
  }
};

// day 4
// CSS cascading style sheets
<a style="color: pink" href="http://google.com"></a>

<head>
  <style>
    a {
      color: pink;
      text-decoration: none;
    }
  </style>
</head>

<head>
  <link rel="stylesheet" href="style.css">
</head>

// day 5
const mario = {
  // data
  profession: "plumber",
  // behaviour
  jump: ?????

}

// functions - list of instructions
// takes in input, returns an output
function sayHello() {
  console.log("hi");
}

//<function name>(); executes the function
sayHello();
sayHello();
sayHello();

// a function that takes in arguments
function add(number1, number2) {
  return number1 + number2;
}

add(5, 6); // 11

// day 6
// html css
// block vs inline
<div> blocks
<a> inline

// floating
float: left;

<header> 100%
<sidebar> 25%
<content> 75%
<footer> 100%

// LAYOUTS
______________
______________
  |
  |
  |
______________
______________

// BOX MODEL
margin
border
padding
content

// recipe card

// day 7
// html css
// LAYOUTS
// position
position: relative;
top:
left:
bottom:
right:

// z index
z-index: 0;
// higher the z index the closer it is to you
// the lower the z index the further back it is from you

// flexbox
display: flex;
justify-content:
align-item:

<div class="container">
  <div class="item"></div>
</div>

// gamification: flexbox froggy

// grid
display: grid;
grid-template: 20% 20% 20% 20% 20%;

// gamification: grid garden

// day 8
// jQuery - John Resig, mozilla
<script src="jquery-3.2.1.js"></script>

<script>
  window.onload = function() {};
  document.addEventListener("DOMContentLoaded", function() {});

  $(function(){});

  // this ensures our page has loaded
  $(document).ready(function() {
    // $('css selector')
    $('h1').html('Jacob');

    // events
    $('#rocket').click(function(){
      console.log("the rocket was clicked");
      $('#rocket').css('position', 'relative');
      $('#rocket').css('top', 300);
    });

    $('form').submit(function(events){
      event.preventDefault();
    });
    $('input[type=password]').keypress(function(event){
      event.which; // 97, ascii value
      event.key; // a
    });
  });

</script>

<img src="rocket.jpg" id="rocket">
<form>
  <input type="password">
  <input type="submit">
</form>


//
