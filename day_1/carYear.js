const carYear = parseInt(prompt('What is your car year'));

if(carYear >= 2017) {
  console.log('The car is in the future');
} else if(carYear >= 2000) {
  console.log('The car is somewhat new');
} else if(carYear >= 1980) {
  console.log('The car is very old');
} else {
  console.log('The car in ancient');
}
