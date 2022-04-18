function one() {
  setTimeout(() => {
    console.log('Function one');
  }, 3500);
}

function two() {
  console.log('Function two');
}

function three() {
  return 'Function three';
}
one();
setTimeout(two, 2000);
console.log(three());
