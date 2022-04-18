function xyz(name, subject, address) {
  this.address = address;
  this.name = name;
  this.subject = subject;
}
xyz.prototype.getName = function () {
  return this.name;
};
xyz.prototype.getAddress = function () {
  return this.address;
};

xyz.prototype.grades = 'A';
var x1 = new xyz('Mr. Kalisa', 'DBA', 'Kuwakulu');
y1 = x1.getAddress();
console.log(x1);
console.log(y1);
