function Fun2() {
  var x = document.getElementsByTagName('div');
  for (var i = 0; i < x.length; i++) {
    x[i].style.fontWeight = 'Bolder';
    x[i].style.backgroundColor = 'Gold';
  }

  // x[0].style.fontFamily = 'Courier New';
  // x[0].style.color = 'Green';

  // x[1].style.color = 'Brown';
  // (x[2].style.backgroundColor = 'Yellow'), (x[3].style.fontSize = '45px');
}
