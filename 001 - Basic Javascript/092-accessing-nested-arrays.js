// Example is an array of objects, each of which has a nested array as one of its properties.

// We access the top array's elements (which are objects) like so:   myPlants[0], myPlants[1]
// We access those objects' properties like so:   myPlants[0].type, myPlants[0].list
// We access the nested array's elements like so: myPlants[0].list[0], myPlants[0].list[1], etc.

var myPlants = [
  {
    type: "flowers",
    list: [
      "rose",
      "tulip",
      "dandelion"
    ]
  },
  {
    type: "trees",
    list: [
      "fir",
      "pine",
      "birch"
    ]
  }
];

// set secondTree to the 2nd item in the "trees" list from "myPlants" object:
var secondTree = myPlants[1].list[1];
// and check it (outputs "pine"):
console.log(secondTree);
