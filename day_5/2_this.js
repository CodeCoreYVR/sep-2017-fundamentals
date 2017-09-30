// this - relative referencing
const car = {
  maxSpeed: 260,
  speed: 0,
  make: "Tesla",
  model: "Model3",
  year: 2018,
  // this is a reserved word in javascript
  // and it asks the question, where am i? who is calling me?
  // this refers to the object that the methods live in
  drive: function() { console.log(`driving at ${ this.speed } km/h...`) },
  park: function() { console.log("parking...") },
  stop: function() { console.log("stopping...") }
};
