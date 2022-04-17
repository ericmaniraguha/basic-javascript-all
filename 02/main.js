let age = [15, 25, 45, 78, 25, 54, 65];
for (let i = 0; i < age.length; i++) {
  document.write('<h1>' + age[i] + '</h1>');
}
document.write(
  '<h1>' +
    '====================Array Representation II=========================' +
    '</h1>'
);
var fruits = new Array('Mango', 'Orange', 'Banana', 'Apple');

for (let i = 0; i < fruits.length; i++) {
  document.write('<h1>' + fruits[i] + '</h1>');
}

document.write(
  '<h1>' +
    '====================Push element to an array=========================' +
    '</h1>'
);
var fruit_1 = new Array('Mango', 'Orange', 'Banana', 'Apple');
fruit_1.push('Next generation fruits');
for (let i = 0; i < fruit_1.length; i++) {
  document.write('<h1>' + fruit_1[i] + '</h1>');
}

document.write(
  '<h1>' +
    '====================Pop element to an array=========================' +
    '</h1>'
);

fruit_1.pop();
fruit_1.push('it is pushed 2');
fruit_1.push('it is pushed 3');
// fruit_1.pop(); //'it is pushed 3'
for (let i = 0; i < fruit_1.length; i++) {
  document.write('<h1>' + fruit_1[i] + '</h1>');
}
