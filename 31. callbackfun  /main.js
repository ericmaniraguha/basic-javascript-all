function firstAction(callback, message, anotherCallback) {
  console.log(message);
  setTimeout(callback, 2000);
  anotherCallback();
}
function secondAction(message) {
  console.log(message);
}

function thirdAction(message) {
  console.log('I am a third action');
}

setTimeout(
  () =>
    firstAction(
      () => secondAction('I am the 2nd action.'),
      'I am first Action',
      thirdAction
    ),
  5000
);
// firstAction();
// secondAction();
