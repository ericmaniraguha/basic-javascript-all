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
person.personInfo();

document.write('<h1>' + person.personInfo_1() + '</h1>');
