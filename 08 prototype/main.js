function personInfo(name, address, subject) {
  this.name = name;
  this.address = address;
  this.subject = subject;
}
var val = new personInfo(
  'Mr. Parker',
  'Kigali - Rwanda',
  ' Software developer'
);

// how to edit property
personInfo.prototype.getName = function () {
  return this.name;
};

personInfo.prototype.getAddress = function () {
  return this.address;
};

var x = new personInfo(
  'Mrs. Carla',
  'Eastern Province',
  'Database administrator'
);

console.log(x.getName());

console.log(val);
