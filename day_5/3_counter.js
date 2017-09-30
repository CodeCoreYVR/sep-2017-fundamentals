0;
1;
2;
3;
4;
5;
6;
7;
8;
9;
10;

let counter = 0;
while (counter <= 10) {
  console.log( counter );
  counter++;
}

// create a counter object
const counter = {
  number: 0,
  step: 1,
  // ES6: inc: function(), ": function" we are left with just ()
  inc() {
    if (this.number < 10) {
      this.number += this.step;
    }
  },
  // make a decrement method that takes one away from the current counter
  // try to make it stop at zero, you can't go into the negative space
  dec() {
    if (this.number > 0) {
      this.number -= this.step;
    }
  },
  // have the ability to set the number to an new value
  // i want change the current number to 5, using a method
  set( number ) {
    // is a valid number?
    if (number > 0 && number < 10) {
      this.number = number;
    }
  },
  // have the ability to change the amount we inc or dec. i we want to step by 2's instead of 1, make a method for i
  setStep( number ) {
    this.step = number;
  }
};

// counter.number; // 0
// counter.number = 1; // 1
// counter.number++; //
// counter.inc(); // 3

counter.number; //0
counter.inc(); // 1
counter.inc(); //
counter.inc(); //
counter.inc(); //
counter.inc(); // 5
counter.dec(); // 4
counter.dec(); // 3
counter.inc(); // 4
counter.set(2); // 5
// counter.number = 2;
counter.set(3); // 5
// counter.number = 3;
counter.set(9); // 5

counter.inc();
counter.inc();
counter.inc();
counter.inc();
counter.inc();
counter.inc();
counter.inc(); // 9
counter.inc(); // 9

counter.dec();
counter.dec();
counter.dec();
counter.dec();
counter.dec();
counter.dec();
counter.dec();
counter.dec();
counter.dec(); // 0
counter.dec(); // doesn't go to negative 1

counter.set(5);
counter.inc(); //6
counter.dec(); //5
counter.dec(); //4
counter.setStep(2);
counter.inc(); // 6
counter.inc(); // 8
counter.inc(); // 10
counter.dec(); // 8
counter.dec(); // 6
counter.dec(); // 4
counter.dec(); // 2
counter.dec(); // 0

// getter, setter -> accessor methods
// object oriented programming


//
