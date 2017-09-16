const random = Math.floor(100 * Math.random());

if(random > 80) {
  console.log('The number is large');
} else if(random > 60) {
  console.log('The number is medium');
} else if(random > 40) {
  console.log('The number is small');
} else {
  console.log('The number is extra small');
}

// Notes:
// 1. If is a statement, meaning it perform an action but doesn't produce a value
// 2. You can have at least one keyword in it which is `if`
// 3. You can optionally put one or many `else if` and keep in mind that
//    `else if` takes an expression (ideally returns true or false)
// 4. You can optionally have at most one `else` that doesn't take anything
