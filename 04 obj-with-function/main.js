const person = {
  names: 'Kamanzi',
  age: 45,
  address: 'Kigali - Rwanda',

  personInfo: function () {
    document.write('function inside the objects');
  },

  personInfo_1: function () {
    return 'function inside the objects 1';
  },
};
person.newFunctionToObj = () => {
  return 'function inside the objects, added successfully';
};

document.write('<h1>' + person.newFunctionToObj() + '</h1>');

Object.values(person).forEach((property) => {
  document.write(property);
});
