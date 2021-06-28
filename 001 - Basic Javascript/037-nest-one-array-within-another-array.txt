// MULTI-DIMENSIONAL ARRAYS
// You can nest one array within another array
// as an element, like so:

var someVar;
var firstArray = ["some value", 15, 26.3, someVar];
var myArray = [firstArray, 3, ["team name", "team score", 42], "durr"];

console.log("This is a someVar var:\n", someVar, "\n");
console.log("This is an array:\n", firstArray, "\n");
console.log("This is a multi-dimensional array with other arrays nested within it:\n", myArray, "\n");