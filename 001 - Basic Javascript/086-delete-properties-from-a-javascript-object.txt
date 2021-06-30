// to delete a property of an object,
// use delete and the property name, like so:
//      delete someObject.somePropertyName;


var myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"],
  "bark": "woof"
};

// delete the "tails" property from myDog object:
console.log("myDog is:\n", myDog, "\n");
delete myDog.tails;
console.log("We removed the 'tails' property, so now myDog is:\n", myDog,"\n");
