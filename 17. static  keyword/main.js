class Car {
  static numberOfCars = 0;

  constructor(model) {
    this.model = model;
    Car.numberOfCars += 1;
  }
}

let car1 = new Car('Mazda');
let car2 = new Car('Benz');
let car3 = new Car('Mitsubish');

console.log(car1, ' <= Car1 informations.');
console.log(car2, ' <= Car2 informations');
console.log(Car.numberOfCars, ' <= static variable');
