// Variable scope
// global variabe - declared outside a function
// local variable - declared within that function
if (true) {
  var x = 5; // can acces this var declaration outside this if block
}
console.log(x);

if (true) {
  let y = 5; // can't acces this let declaration outside the if block
}
//console.log(y); // ReferenceError: y is not defined, coz scope of the variabe within if block

// Variable hoisting
// can refer to a variable declared later, without getting a exception
// hoisted variable will return a undefined value

var c;
console.log(c === undefined); // refering to a variable declared later
console.log(c); //c is not defined
c = 3;
console.log(c);

var name = 'khrish'; //global variable
(function() {
  var name; //local variable
  console.log(name); //refering to a variable declared later
  name = 'khrist yohan';
  console.log(name);
})();
console.log(name);
