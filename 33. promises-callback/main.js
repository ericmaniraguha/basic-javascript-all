var functions = function () {
  return new Promise(function (resolve, reject) {
    resolve('Learnt function,');
  });
};

var callback = function (message) {
  return new Promise(function (resolve, reject) {
    resolve(message + ' Learn callback functions');
  });
};
var promises = function (message) {
  return new Promise(function (resolve, reject) {
    resolve(message + ' ,Good to for Promises in JavaScript');
  });
};

// execute promises
functions()
  .then(function (result) {
    return callback(result);
  })
  .then(function (result) {
    return promises(result);
  })
  .then(function (result) {
    console.log('Good to go : ' + result);
  });
