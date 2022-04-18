function Fun2() {
  var x = document.getElementsByTagName('div');
  for (var i = 0; i < x.length; i++) {
    x[i].style.fontWeight = 'Bolder';
    x[i].style.backgroundColor = 'Gold';
  }
}

function Fun3() {
  var x = document.getElementsByTagName('input');
  for (var i = 0; i < x.length; i++) {
    x[i].style.color = 'red';
    x[i].style.backgroundColor = 'lightblue';
  }
}
