function one() {
  setTimeout(() => {
    console.log('Function one');
    two();
  }, 3500);
}
// NB: Bellow This is not a callback function but the same functionality as callback function

function two() {
  console.log(
    'Function two, inside function one is called also at the same time as fun one.'
  );
}

function three() {
  return 'Function three';
}
one();
// setTimeout(two, 2000);
console.log(three());
