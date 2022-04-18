const Employee = {
  Post: function () {
    return 'Full Stack JS';
  },
  changeTitle: function (title) {
    this.title = title;
  },
};
var emp1 = Object.create(Employee);
(emp1.title = 'AWS Engineer'),
  (emp1.role = 'Developer'),
  emp1.changeTitle('Public Speaker====');
console.log(emp1);
