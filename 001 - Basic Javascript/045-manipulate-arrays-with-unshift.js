/* To add elements to the START of the array, we use
  the .UNSHIFT() method of the array object, with parameters
  being things that we want to add, like so: */

var someArray = [1, 15, "what", "blah"];
console.log("someArray initially:\t\t", someArray);

/* Note that if there are several things being added, they
   are inserted at the start of the array as a single chunk,
   in the same order as they are listed in the method.

   .UNSHIFT() returns the new length of the array as a result,
   as in below example. */

// add elements to the array and save the new length in a var
var newLength = someArray.unshift("blah", 3, ["dog","cat","donkey"]);
console.log("After adding elements to the array, the new length is " + newLength + ".");

console.log("someArray afterwards:\t\t", someArray);


// Setup an array:
var myArray = [["John", 23], ["dog", 3]];
console.log("\n"+"myArray before shifting:\t", myArray);

// shift myArray, to remove the 1st element:
myArray.shift();
console.log("myArray after shifting:\t\t", myArray);

// unshift myArray - adding ["Paul",35] array as its 1st element:
myArray.unshift(["Paul",35]);
console.log("myArray after unshifting:\t", myArray);

