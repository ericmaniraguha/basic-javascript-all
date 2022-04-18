function one() {
  console.log('Function one');
}

function two() {
  console.log('Function two');
}

function three() {
  return 'Function three';
}

setTimeout(one, 2000);
two();
console.log(three());
