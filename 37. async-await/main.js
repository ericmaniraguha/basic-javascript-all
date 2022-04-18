function makeOrders(coffee) {
  return new Promise((resolve, reject) => {
    console.log('Making request for a ' + coffee);
    if (coffee == 'Black Coffee') {
      resolve('Here is your coffee!, Have a nice day.');
    } else {
      reject('Sorry, We serve Black coffe only.');
    }
  });
}
function processOrder(order) {
  return new Promise((resolve, reject) => {
    console.log('Processing Orders');
    resolve('Extra Information ' + order);
  });
}

makeOrders('black coffee')
  .then((order) => {
    console.log('Order has been received');
    return processOrder(order);
  })
  .then((processOrder) => {
    console.log(processOrder);
  })
  .catch((err) => {
    console.log(err);
  });
