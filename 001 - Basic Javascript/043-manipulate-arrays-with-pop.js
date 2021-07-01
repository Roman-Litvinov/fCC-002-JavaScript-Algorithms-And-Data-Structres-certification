/* To remove the element from the end of the array,
 we use the .POP() method of the array object, like so:

someArray.pop();

It takes the last element of the array, removes it from
the array, and returns it. We can save it in a variable
or use it, or whatever.
*/


// Set up an array:
var myArray = [["John", 23], ["cat", 2]];
console.log("myArray before popping: ", myArray);

// pop the last element of the array and save it in a var:
var removedFromMyArray = myArray.pop();

console.log("myArray after popping: ", myArray);
console.log("The last element removed was ", removedFromMyArray);