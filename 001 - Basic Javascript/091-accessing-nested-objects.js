// we can nest other objects inside objects as their properties,
// and access those other objects' properties using bracket or
// dot notation.

// Example:
var ourStorage = {
  "desk": {
    "drawer": "stapler"
  },
  "cabinet": {
    "top drawer": {
      "folder1": "a file",
      "folder2": "secrets"
    },
    "bottom drawer": "soda"
  }
};
console.log(ourStorage.cabinet["top drawer"].folder2);
console.log(ourStorage.desk.drawer);
console.log("\n");






// set up the object:
var myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
    },
    "outside": {
      "trunk": "jack"
    }
  }
};

// show me the object in its entirety:
console.log("What's inside the car?\n", myStorage, "\n");

// show me contents of the glove box inside the car
// (try and use dot notation whenever possible, 
// instead of bracket notation):
var gloveBoxContents = myStorage.car.inside['glove box'];

console.log("Inside the glove box we have:", gloveBoxContents);