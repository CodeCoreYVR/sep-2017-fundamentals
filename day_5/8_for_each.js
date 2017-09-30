function square( number ) {
  return number ** 2;
}

[1,2,3,4,5].forEach( square );


[1,2,3,4,5].forEach( function(number){
  console.log(number);
});
