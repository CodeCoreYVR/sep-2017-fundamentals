// timing functions - built in higher order function
// setTimeout(fn, delay);

function happyNewYear() {
  console.log("HAPPY NEW YEAR!!!");
}

// delay is not seconds, milliseconds, 1000ms == 1second
setTimeout(happyNewYear, 10000);

// you might want to use this syntax if the function is a one off
setTimeout(function(){
  console.log("HAPPY NEW YEAR!!!");
}, 10000);

// setInterval
setInterval(happyNewYear, 1000);


// make a countdown to new year using the built in higher order timing functions in javascript
10;
9;
8;
7;
6;
5;
4;
3;
2;
1;
"HAPPY NEW YEAR";

for (let counter = 10; counter > 0; counter--) {
  console.log(counter);
}

console.log("HAPPY NEW YEAR!");


let counter = 10;

while(counter > 0) {
  console.log(counter);
  counter--;
}


//
