function Employee(name, id, salary) {
  this.name = name;
  this.id = id;
  this.salary = salary;
}

Employee.prototype.post = function () {
  return this.name + '' + ' program creator.';
};
var Kalisa = new Employee('Muhire', 45221, 10000);
console.log(Kalisa);

//
function Programmer(name, id, salary, language) {
  Employee.call(this, name, id, salary);
  this.language = language;
}

var newFun = new Programmer('Carla Orane', 452, 12000, ' JavaScript');
console.log(newFun);
