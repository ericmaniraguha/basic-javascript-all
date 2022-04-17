var obj = new Object(); // var obj ={};
obj.length = 5;
obj.width = 10;

obj.getarea = function () {
  return this.length * this.width;
};
obj.getaperimeter = function () {
  return 2 * this.length + 2 * this.width;
};
document.write('<h1>' + 'The width of rectangle is : ' + obj.width + '</h1>');
document.write('<h1>' + 'The length of rectangle is : ' + obj.length + '</h1>');
document.write(
  '<h1>' + 'The area of rectangle is : ' + obj.getarea() + '</h1>'
);
document.write(
  '<h1>' + 'The perimeter of rectangle is : ' + obj.getaperimeter() + '</h1>'
);
