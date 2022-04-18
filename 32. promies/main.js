var prom = new Promise((resolve, reject) => {
  var drive = false;
  if (drive) {
    resolve('Yes');
  } else {
    reject('No');
  }
});
prom
  .then(function (resolve) {
    console.log(resolve + ', The user knows how to drive.');
  })
  .catch(function (reject) {
    console.log(reject + ', The user does not know how to drive.');
  });
