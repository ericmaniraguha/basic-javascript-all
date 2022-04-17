var obj = new Object(); // var obj ={};
obj.length = 5;
obj.width = 10;

class objRectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
    this.getarea = function () {
      return length * width;
    };
    this.getparameters = function () {
      return (length + width) * 2;
    };
  }
}

var rect1 = new objRectangle(10, 45);
document.write(
  '<h1>' + 'The area of our rectangle is : ',
  rect1.getarea() + '</h1>'
);
document.write(
  '<h1>' + 'The perimeter of our rectangle is : ',
  rect1.getparameters() + '</h1>'
);
