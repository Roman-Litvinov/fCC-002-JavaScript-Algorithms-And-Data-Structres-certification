/* An OBJECT is a collection of data stored as its PROPERTIES.

A property is a pair of a string NAME (KEY) and a VALUE associated with that name (key).
Objects are also known as ASSOCIATIVE ARRAYS - because each property is associated with
the string key that can be used to access it.

A property's value can be a function - in which case the property is called a METHOD.

The name of the property is either a string or anything that can be converted to a string
(which is what JS does when it's time to access the property). So 

Properties are accesed using dot notation, like so:
      
    objectName.propertyName

or using bracket notation, like so (note that propertyName is a STRING, thus
we use quotes, single or double, when using the property name in brackets):

    objectName["propertyName"]

We can access properties using the name of the property stored in a variable:

  var nameVar = "model";  // property name is "model"
  objectName[nameVar]     // same as using 
                              objectName["model"], or 
                              objectName.model

*/

// create a sample object and give it properties:
var myCar = new Object;
myCar.make = "Ford";
myCar.model = "Mustang";
myCar.year = 1969;
myCar.engine = "5-liter V8";
// console.log(myCar);

// same as above, but done using OBJECT INITIALIZER, which is a list of
// key:value pairs, comma-delimited, enclosed in curly braces, with
// a semicolon after the final brace:
var otherCar = {
  make: "Ford",
  model: "Mustang",
  year: 1969,
  engine: "5-liter V8"
};
// console.log(otherCar);

// same as above, object initializer, but done in a single line:
var yetAnotherCar = {make:"Ford", model:"Mustang", year:1969, engine:"5-liter V8"};

// returns all properties in curly braces:
console.log(yetAnotherCar); 
// returns "Mustang" - value of model property, accessed using dot notation:
console.log(yetAnotherCar.model); 
// same as above, but we're using the brackets notation:
console.log(yetAnotherCar["model"]);
// same as above, bracket notation, but double quotes for the property name:
console.log(yetAnotherCar['model']);

// when a property was not assigned a value, it returns undefined when 
// we try to access it:
console.log(yetAnotherCar.color); 


// make an object to represent a dog
var myDog = {
  name: "Bonnie",
  legs: 4,
  tails: 1,
  friends: ["chew toys", "bones", "frisbees", "little kids"]
};

// check the object contents:
console.log("\nContents of myDog object:\n", myDog,"\n");



// EXPERIMENT! ==============================================
// enumerate through object (OMG, it works! I made this! ME!
// and I don't even get to loops yet!!!):
for (let i in myDog) {
  // print the property name and its value!!!
  console.log(i+":", myDog[i])
}
// check to be sure that var i was a local one and
// isn't available globally (should throw an error if so):

// console.log("\n",i);
