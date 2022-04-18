var person = (friend, pers2) => {
  // pers2();
  return "My friend's name is " + friend;
};

var person2 = () => {
  console.log('My name is Sylvie.');
};

console.log(person('Mrs. Smith', person2));
person2();
