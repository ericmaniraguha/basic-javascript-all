// function Start() {
//   setTimeout(function () {
//     alert('Welcome Back!');
//   }, 2000);
// }

var id = 0;
var message = () => {
  alert('Welcome to promise functions.');
};
function Start() {
  id = setInterval(message, 2000);
}
function stop() {
  clearTimeout(id);
}
