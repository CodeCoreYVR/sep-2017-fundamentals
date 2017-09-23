function citySize(cities) {
  console.log(cities);

  for (let city in cities) {
    console.log(city); // this will give me the city name
    console.log(cities[city]);// but i want the city popultion, the value associated with the city.

    // if the city is large
    // if (city is larger than 150000) {
    //   console.log("the city is large.");
    // }
  }
}

// alternative
function citySize(object) {
  console.log(object);

  for (let property in object) {
    console.log(property); // this will give me the city name
    // object[property] will give you corresponding value
    console.log(object[property]);// but i want the city popultion, the value associated with the city.

    // if the city is large
    // if (city is larger than 150000) {
    //   console.log("the city is large.");
    // }
  }
}

let cities = {
  vancouver: 603502,
  burnaby: 223220,
  langley: 104177
};

citySize(cities);
