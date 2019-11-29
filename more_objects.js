console.log(
  '////////////// USING OBJECT LITERAL TO CREATE A OBJECT //////////////////'
);

var userDetails = {
  name: { firstName: 'khrist', lastName: 'yohan' },
  age: 27,
  location: 'vellore'
};
console.log(userDetails);

// statement creates an objects and assigns to it
var khrist = 5;
if (khrist == 5) {
  var x = { name: 'khrist yohan' };
} // if statement true the object is created
console.log(x);

console.log(
  '////////////// CONSTRUCTOR FUNCTION - TO CREATE A OBJECT //////////////////'
);
// Constructor function - another way to create objects (refer - objects.js object creation)
function userMobile(model, os, ram, version, versionName, rooted) {
  this.model = model;
  this.os = os;
  this.ram = ram;
  this.version = version;
  this.versionName = versionName;
  this.rooted = rooted;
}
var mobileOne = new userMobile('Moto G3', 'Android', '1 GB', 7.1, 'pie', true);
console.log(mobileOne);
console.log(mobileOne['model']);
console.log(mobileOne['manufacture']); // undefined

var mobileTwo = new userMobile('Lenevo', 'Android', ' ', ' ', 'Lollipop');
console.log(mobileTwo);
console.log(mobileTwo['model']);

console.log('////////////// ADDING //////////////////');
// Adding property
console.log(mobileOne['manufacture']);
mobileOne['manufacture'] = 'Google';
console.log(mobileOne);
console.log(mobileOne['manufacture']);

console.log('////////////// DELETING //////////////////');
// Deleting property
console.log(mobileOne['manufacturer']);
delete mobileOne.manufacturer;
console.log(mobileOne['manufacturer']);

console.log('////////////// COMPARING //////////////////');

var khristName = { name: 'khrish' };
var yohanName = { name: 'khrish' };

console.log(khristName == yohanName);
console.log(khristName === yohanName);

var khristName = { name: 'chaal' };
var yohanName = khristName;

console.log(khristName == yohanName);
console.log(khristName === yohanName);
