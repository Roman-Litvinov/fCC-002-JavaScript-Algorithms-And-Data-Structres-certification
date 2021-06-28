/* To append elements to the end of an array, we use the .PUSH() function
  of the array in question, with parameters being things that we want to
  add, like so:

someArray.push(arg1, arg2, ...);

  It returns the .length property of the resulting array after changes:

var newArrayLength = someArray.push(someArgument);

*/


var myArray = [["John", 23], ["cat", 2]];
console.log("myArray array is currently", myArray);

// Append/add/push the array ["dog", 3] to the end of the myArray variable:
myArray.push(["dog", 3]);
console.log("\nAnd now myArray array is ", myArray)
