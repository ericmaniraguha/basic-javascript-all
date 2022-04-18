function firstAction(callback) {
  console.log('I am the 1st action');
  setTimeout(callback, 2000);
}
function secondAction() {
  console.log('I am the 2nd action.');
}
setTimeout(() => firstAction(secondAction), 5000);
// firstAction();
// secondAction();
