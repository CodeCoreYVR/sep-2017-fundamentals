// car object
const car = {
  // data
  make: "Porsche",
  model: "Cayanne",
  capacity: 5,
  year: 2014,
  speed: 0,
  // behaviours or methods
  drive() {
    console.log(`You are driving at ${ this.speed } km/h`);
  },
  stop() {
    if (this.speed > 120) {
      console.log(`Scr${ "e".repeat(this.speed) }tch!!!`);
    } else if (this.speed > 80) {
      console.log("RRrch!");
    } else if (this.speed <= 80){
      console.log("shhh...");
    } else {
      console.log("Yikes! I don't know how fast I'm going!");
    }
  }
};
