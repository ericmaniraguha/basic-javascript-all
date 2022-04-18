class Student {
  constructor(name, age, roll) {
    this.name = name;
    this.age = age;
    this.roll = roll;
  }
  Org() {
    return 'My Function with name of ' + this.name + ' from learning JS';
  }
  dob() {
    return 'The date of birth of ' + this.name + ' is' + (2020 - this.age);
  }
  // static method
  static add(a, b) {
    return a + b;
  }
}
class Student_1 extends Student {
  constructor(name, age, roll, language, section) {
    super(name, age, roll);
    this.language = language;
    this.section = section;
  }
}

// create object of the class
var st = new Student_1('Kolode', 35, 4, 'JavaScript', 'A');
console.log(st);
console.log(st.Org());
console.log(Student_1.add(78, 8), ' For Add method');
