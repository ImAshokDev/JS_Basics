console.log('////////////// DEFINING METHOD //////////////////');
// Defining a method
// Method is a property of an object that is a function
var khrishObject = {
  // Normal object
  khrishProperty: function() {
    // Property whose value is a function [which is called a method]
    console.log('hey khrish.. Now this is a method');
  },
  normalProperty: 'property value' // Normal property with a string value
};
khrishObject.khrishProperty();
console.log(khrishObject.normalProperty);

console.log('////////////// ANOTHER WAY TO DEFINE METHOD //////////////////');
// Another way define a method (simpler than code written above, no key and value pair, just the function )
var anotherObject = {
  anotherProperty() {
    console.log('Another way to define method....');
  },
  normalProperty: 'Normal property value'
};
anotherObject.anotherProperty();
console.log(anotherObject.normalProperty);

console.log('////////////// METHOD WITH ARGUMENTS //////////////////');
// Method with arguments
var khristyohan = {
  name(firstName, lastName) {
    console.log(firstName + ' ' + lastName);
  },
  age: 21,
  designation: 'web Developer'
};
khristyohan.name('khrist', 'yohan');
console.log(khristyohan.age);
console.log(khristyohan.designation);

console.log(
  '////////////// USING CREATE METHOD - TO CREATE OBJECT //////////////////'
);
// Using create method [ Object.create() ] - to create an object without having to define a constructor function
// Properties and method encapsulation

var Mobile = {
  // Mobile property
  model: 'Moto G3', // Default value of Mobile property
  displayModel: function() {
    // Method to display mobile model
    console.log(this.model);
  }
};

var currentMobile = Object.create(Mobile); // creating a new mobile type with create method
currentMobile.displayModel();

var lastMobile = Object.create(Mobile); // creating another
lastMobile.model = 'Lenovo'; // assinging a value to model (replacing default value)
lastMobile.displayModel();

console.log('////////////// USING BUILT-IN METHODS //////////////////');
var message = 'Help khrist yohan';
var ddd = message.toUpperCase();
console.log(ddd);
