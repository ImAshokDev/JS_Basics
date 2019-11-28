// wednesday 28/11/2019 06:43 PM

// Types
// Number
// String
// Boolean
// Symbol (ES2015)
// Object
// Function
// Array
// Date
// RegExp
// null
// undefined

// Variables
var userName;
console.log(userName); // undefined

userName = 'Khrist';
console.log(userName);

var username = 'yohan';
console.log(username);

userName = 'khrist yohan';
console.log(userName);

// Variables with different data types
var userAge = '27';
console.log(userAge); //27

var userAge = 27;
console.log(userAge); //27

var isUserCode = true;
console.log(isUserCode);

var Locations = ['vellore', 'chennai', 'china'];
console.log(Locations[0]);
console.log(Locations[1]);
console.log(Locations[2]);
console.log(Locations[3]); //undefined

var userDetails = ['khrist', 'yohan', 27, true, 'Vellore'];
for (var i = 0; i < userDetails.length; i++) {
  console.log(userDetails[i]);
}

// Changing datatype of variable by changing value
var me = 'khrist yohan';
console.log(me);
me = 27;
console.log(me);
me = false;
console.log(me);
me = ['khrist', 'yohan'];
console.log(me);

// Object
/*
the querySelector can only be used when script running on browser
using query selector to select h1 html tag
storing the selected object in myVariable
*/

// var myVariable = document.querySelector('h1');
