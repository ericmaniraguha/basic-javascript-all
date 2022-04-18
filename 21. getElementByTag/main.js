myFunction = function () {
  var x = document.getElementsByClassName('cl-1');
  for (var i = 0; i < x.length; i++) {
    x[i].style.display = 'none';
  }
};

myFunction1 = () => {
  var x = document.getElementsByClassName('cl-1');
  for (var i = 0; i < x.length; i++) {
    x[i].style.display = 'block';
  }
};

myFunction2 = () => {
  var x = document.getElementsByClassName('cl-1');
  for (var i = 0; i < x.length; i++) {
    x[i].style.display = 'italic';
    x[i].style.color = 'green';
    x[i].style.backgroundColor = 'brown';
    x[i].style.fontWeight = 'bolder';
  }
};
