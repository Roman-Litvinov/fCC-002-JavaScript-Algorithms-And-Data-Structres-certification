// After saving the name of the property in a variable,
// we can later use the variable to access the property value
// using the bracket notation:

// EXAMPLE:
// set up a sample object
var dogs = { Fido:'Mutt', Hunter:'Doberman', Snoopie:'Beagle'};
// save the name of the property in a var:
var myDog = 'Hunter';
// use the var to get the value of that property using bracket notation
// (same as using dot notation: dogs.Hunter):
var myBreed = dogs[myDog];
// check it:
console.log(myBreed);

// EXAMPLE:
// set up another sample object:
var someObj = {
  propName:'John'
};
// set up a function to build a name of the property at run-time:
function propPrefix(str) {
  var s = "prop";
  // add "prop" to the string argument and return the result:
  return s+str;
}
// build the property name and save to a var (will get "propName"):
var someProp = propPrefix("Name");
// get the value of the property "propName":
console.log(someObj[someProp]);



var testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};
// use a variable to store the property name
// and get the value of that property using bracket notation:
var playerNumber = 16;
var player = testObj[playerNumber];
