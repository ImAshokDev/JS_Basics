// Function declaration
khrish(); // calling a function refered later

function khrish() {
  console.log('hey khrish');
}

// Function expression
//pritam(); // Type Error: pritam is not a function
var pritam = function() {
  console.log('Hey Pritam');
};
console.log(pritam);


// Function Scope

var firstName = 'khrist' lastName = 'yohan';

function userDetails() {
  var number = 7, age = 27,

  function userName(first, last) {
    return first + " " + last;
  }
  return userName(firstName, lastName);
}

userDetails();