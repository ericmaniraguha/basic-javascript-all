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
  // static method
  static add(a, b) {
    return a + b;
  }
}
var Perker = new Student('Addition', 21, 45);
console.log(Perker);
console.log(Student.add(10, 45));
