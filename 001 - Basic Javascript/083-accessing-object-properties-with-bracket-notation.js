var testObj = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water"
};

// Use bracket notation when property names have
// a space in them, or start with a number, etc.

// using bracket notation, get the entree and 
// drink properties of the testObj:
var entreeValue = testObj["an entree"];
var drinkValue = testObj["the drink"];

console.log(entreeValue);
console.log(drinkValue);