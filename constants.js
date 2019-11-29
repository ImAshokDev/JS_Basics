const PI = 3.14;

// PI = 5;  // cannot assign/change value to constant

console.log(PI);
(function() {
  console.log(PI * 2);
  // PI = 5;  // cannot assign/change value to constant
  console.log(PI);
})();

// cannot declare a constant with the same name as a function
function khrist() {}
// const chaal = 10;  // SyntaxError

// cannot declare a constant with the same name as a variable

function yohan() {
  const yohan = 20;
  console.log(yohan);
  // var pritam;  // SyntaxError
}
yohan();

// Properties of objects assigned to Constants
const KHRIST_YOHAN = { firstName: 'khrist' };
KHRIST_YOHAN.lastName = 'yohan';
console.log(KHRIST_YOHAN);
