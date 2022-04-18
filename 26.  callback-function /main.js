var person = (friend, pers2) => {
  setTimeout(() => {
    console.log("My friend's name is " + friend);
    pers2();
  }, 2500);
};

var person2 = () => {
  console.log('My name is Sylvie.');
};

person('Mrs. Smith', person2);
person2();
