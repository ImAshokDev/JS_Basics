// Object is a collection of properties(with key and value)
// var object = {key: value, key: value}
// Almost everything is an object in javascript
// objectName.propertyName

// Objects in other languages
// Associative arrays in PHP
// Dictionaries in Python
// Hash tables in C
// Hash maps in Java
// Hashes in Ruby and Perl

// Objects creation using different ways
// Using an object literal
// Using new keyword
// Using Constructor
// Using Object.create()   // ECMAScript 5

console.log(
  '////////////// CREATING OBJECT USING NEW KEYWORD //////////////////'
);
// Creating a object

var myMobile = new Object();
myMobile.model = 'Moto G';
myMobile.os = 'Android';
myMobile.ram = '1 GB';
myMobile.version = 7.1;
myMobile.versionName = 'Nougat';
myMobile.rooted = true;

console.log('////////////// ACCESSING OBJECT //////////////////');
// Accessing
console.log(myMobile);
console.log(myMobile['model']);
console.log(myMobile['manufacturer']); // undefined

console.log('////////////// EXAMPLE TO ASSIGN IN MANY WAYS //////////////////');
// Example on how can we assign anything to object
var khrishObject = new Object(),
  name = 'your name',
  randomNumber = Math.random(),
  yohanObject = new Object();

console.log(khrishObject);
console.log(name);
console.log(randomNumber);
console.log(yohanObject);

khrishObject.designation = 'developer';
khrishObject['date created'] = new Date();
khrishObject[name] = 'khrist yohan';
khrishObject[randomNumber] = 'sdfsfsd';
khrishObject[''] = 'This is empty string ';
khrishObject[yohanObject] = 'hbh';
yohanObject.firstName = 'first name';
yohanObject.lastName = 'last name';
khrishObject[yohanObject.firstName] = 'khrist';
khrishObject[yohanObject.lastName] = 'yohan';

console.log(khrishObject);
console.log(yohanObject);
console.log(khrishObject[yohanObject]);
console.log(khrishObject[yohanObject.firstName]);
