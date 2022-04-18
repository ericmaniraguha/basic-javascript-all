class Student {
  constructor(name, age, roll) {
    this.name = name;
    this.age = age;
    this.roll = roll;
  }
  Org() {
    return 'My Function' + this.name + ' from learning JS';
  }
  dob() {
    return 'The date of birth of ' + this.name + ' is' + (2020 - this.age);
  }
}
var Perker = new Student('Addition', 21, 45);
console.log(Perker);
