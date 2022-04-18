const Employee = {
  Post: function () {
    return 'This is an Eng.';
  },
  changeName: function (name) {
    this.name = name;
  },
};

var emp = Object.create(Employee, {
  name: { value: 'Mr. Muhigira', writable: true },
  role: { value: 'Programmer' },
});
emp.changeName('Peter');
console.log(emp);
