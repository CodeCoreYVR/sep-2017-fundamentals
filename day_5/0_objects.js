// video characters
const mario = {
  // data about mario
  // properties that describe mario
  profession: "plumber",
  moustache: true,
  nationality: "Italian",
  age: 40,
  // functionality or behaviours
  // methods <- Daniel Day Louis, actor (method actor)
  jump: function(){ console.log("Mario is jumping") },
  swim: function(){ console.log("Mario is swimming") },
  run: function(){ console.log("Mario is running") }
};

const fly = function(){};
mario.age; // 40
mario.jump; // this gives me back a function, but this does not execute the function
mario.jump(); // adding the (); will execute the function

// push is a method in the array object, we call it by it's name and adding ();
// shoppingList.push();

//
