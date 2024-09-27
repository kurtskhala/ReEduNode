// 3) Create an object representing a car with properties for make, model, and year. Then add a method that returns the car's full description.

const car = {
  make: "toyota",
  model: "aqua",
  year: 2012,
  allDetiles: function () {
    return `${this.make} ${this.model} ${this.year}`
  }
};

console.log(car.allDetiles());

