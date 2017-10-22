let counter = 1;

// we call setInterval a higher order funciton because it takes anothet function
// as argument.
// we call the function that we pass to `setInterval` an anonymous function
// because it doesn't have a name
const id = setInterval(function() {
  if(counter >  9) { clearInterval(id); }
  console.log('Hello');
  counter++;
}, 1000);



// function printAndCheck() {
//   if(counter >  9) { clearInterval(id); }
//   console.log('Hello');
//   counter++;
// }
//
// // we call setInterval a higher order funciton because it takes anothet function
// // as argument.
// let id = setInterval(printAndCheck, 1000);
