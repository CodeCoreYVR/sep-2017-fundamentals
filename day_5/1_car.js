// create a car object. give it make, model, year properties (you can add your own as well).
const truck = {
  maxSpeed: 260,
  speed: 0,
  make: "Tesla",
  model: "Model3",
  year: 2018,
  drive: function() { console.log(`driving at ${ car.speed } km/h...`) },
  park: function() { console.log("parking...") },
  stop: function() { console.log("stopping...") }
};

// Test Case:
car.make; // "Tesla"
car.model; // "Model3"
car.year; // 2018
car.speed; // 0
// TDD: Test driven development
car.drive();
car.park();
car.stop();


//const car = {};
// limit the reassignment of the object / mutation of the object variable
const car = new Object();
car["make"] = "Tesla";
car.model = 'Model3';
car["year"] = 2018;

// car = "Tesla";

// add some functionality to your car
// make it drive, park, stop
// make 3 methods for your car object

// test it
// see if you can see if you can access the properties
// see if you can call the methods
//
// const pi = 3.14;
// pi = 2; // throw an error
// const car = {};
// car.year = 2018;
// car.year = 2019;
