var numOne = 10;
var numTwo = 20;

function add(varOne, varTwo) {
  var result = varOne * varTwo;
  console.log(result);
}
add(numOne, numTwo);

// Function with a return value
function name(fisrtName, lastName) {
  var userName = fisrtName + ' ' + lastName;
  return userName;
}
console.log(name('khrist', 'yohan'));

// Anonymous function
// Function without a name and assigned to some variabe
var khrish = function(fisrtName, lastName) {
  var userName = fisrtName + ' ' + lastName;
  return userName;
};
console.log(khrish);
console.log(khrish());
console.log(khrish('ashok', 'bhai'));
var yohan = khrish('yohan', 'khrist');
console.log(yohan);

// Calling a anonymous function
(function() {
  console.log('Anonymous function');
})();

// Passing a argument in anonymous function
(function(fisrtName, lastName) {
  console.log(fisrtName + ' ' + lastName);
})('khrist', 'yohan');

// Funtion with object properties
function meKhrish(ky) {
  ky.lastName = 'yohan';
  console.log(ky);
}

var meVar = { fisrtName: 'khrist' };
meKhrish(meVar);

// Function defined based on Conditions
num = 5;
if (num == 5) {
  var khrishFun = function(arg) {
    arg.newMobile = 'Moto G3';
    console.log(arg);
  };
  var me = { oldMobile: 'lenova' };
  khrishFun(me);
}
