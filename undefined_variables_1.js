// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_Types

// Declarations in js
//  var - Variable
//  let - local Variable, block-scoped
//  const - block-scoped, read-only named constant

var a;
console.log(a); //undefined

console.log(b); //undefined
var b;

//console.log(c); // Reference Error: c is not defined
let x;
console.log(x); //undefined

//console.log(y); // Reference Error: y is not defined
let y;
console.log(y); //undefined

// Determining undefined variables
var khrish;
if (khrish === undefined) {
  console.log('given variable is undefined');
} else {
  console.log('Given variable is defined with some value');
}

// Undefined variable behaviour
var cp;
if (cp) {
  console.log('variable is defined');
} else {
  console.log('undefined default variable behaves as False');
}

//NaN
var khrish;
console.log(khrish + 5); // undefined value converts to NaN when used in numeric context
khrish = 'yohan';
console.log(khrish);

// Null
var someVariable = null; // null value behaves as 0 in numeric context
console.log(someVariable);
