function firstAction(callback, message) {
  console.log(message);
  setTimeout(callback, 2000);
}
function secondAction(message) {
  console.log(message);
}
setTimeout(() => firstAction(() => secondAction('I am the 2nd action.')), 5000);
// firstAction();
// secondAction();
