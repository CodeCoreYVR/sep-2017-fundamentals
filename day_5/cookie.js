// when we make a class we name the file after the class in lowercase
// the best practice is to have one class per file
class Cookie {
  // constructor is reserved javascript method
  constructor(sugar, flour, glutten) {
    // instance variable
    this.sugar = sugar;
    this.flour = flour;
    this.glutten = glutten;
    this.eaten = false;
    console.log(`Yum! A cookie is born with ${sugar}g of sugar!`);
  }
}

// this constructs an instance of the cookie class and stores it in a variable classed oreo
let oreo = new Cookie(10, 10, true);
let oatmeal = new Cookie(3, 10, true);
let shortBread = new Cookie(15, 10, false);

const oreo = {
  sugar: 10,
  flour: 20,
  glutten: 5
};

const oatmeal = {
  sugar: 5,
  flour: 20,
  glutten: 5
};

class Cookie {
  constructor(sugar) {
    this.sugar = sugar;
    this.flour = 20;
    this.glutten = 5;
  }
}

let cookie = new Cookie(5);

cookie = {
  sugar: 5,
  flour: 20,
  glutten: 5
}
