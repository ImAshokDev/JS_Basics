console.log(
  '////////////// MAKING A FUNCTION A METHOD OF ANOTHER FUNCTION //////////////////'
);
// Normal Function
function Mobile(model, os, ram, version, rooted) {
  this.model = model;
  this.os = os;
  this.ram = ram;
  this.version = version;
  this.rooted = rooted;
  this.versionName = versionName; // this statement, made versionName function a method of Mobile Function
}

function versionName() {
  var result = this.os + ' - ' + this.version;
  console.log(result);
}

var currentMobile = new Mobile('Moto G3', 'Android', '1 GB', 'pie', true);
console.log(currentMobile);
console.log(currentMobile.versionName);
console.log(currentMobile.versionName());

console.log('////////////// GETTER AND SETTER //////////////////');
// Getter and Setter

var user = {
  name: null,
  get getUserName() {
    // get - gets the value of a specific property
    return this.name;
  },
  set setUserName(firstName) {
    this.name = firstName + ' ' + 'yohan'; // set - sets the value of a specific property
  }
};
console.log(user.name);
console.log(user.getUserName);
user.setUserName = 'khrist';
console.log(user.getUserName);
console.log(user.name);

console.log(
  '////////////// ADDING GETTER AND SETTER TO AN OBJECT //////////////////'
);
// Normal way of adding getter and setter to an object while creating it

var khristObject = {
  mobileBrand: 'Micromax',
  get khrist() {
    return this.mobileBrand;
  },
  set yohan(me) {
    this.mobileBrand = me;
  }
};
khristObject.yohan = 'Moto';
console.log(khristObject.khrist);

// Adding getter and setter to an object after creating the object using "Object.defineProperties" method
var yohanObject = { mobileBrand: 'Micromax' };

Object.defineProperties(yohanObject, {
  khrist: {
    get: function() {
      return this.mobileBrand;
    }
  },
  yohan: {
    set: function(me) {
      this.mobileBrand = me;
    }
  }
});

yohanObject.yohan = 'Moto G';
console.log(yohanObject.khrist);

console.log(
  '////////////// EXAMPLE: GETTER AND SETTER USING PROTOTYPE//////////////////'
);
// Example for Getter and Setter using prototype
var cp = new Date();
console.log(cp);
console.log(cp.year);

var currentDate = Date.prototype;
Object.defineProperty(currentDate, 'year', {
  get: function() {
    return this.getFullYear();
  },
  set: function(y) {
    this.setFullYear(y);
  }
});

// Results after prototyping date object above to get and set for just year
var now = new Date();
console.log(now);
console.log(now.year);
