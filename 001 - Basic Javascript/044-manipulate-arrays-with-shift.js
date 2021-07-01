/* To remove and return the FIRST element of the array,
  we use the .SHIFT() method of the array object, like so:

someArray.shift();

All remaining elements are shifted forward, so 2nd element
becomes 1st element, 3rd becomes 2nd, and so on.

This is basically the opposite of .POP(), which removes and 
returns the LAST array element.
*/

// set up the myArray array:
var myArray = [["John", 23], ["dog", 3]];
console.log("myArray before shifting was:\t", myArray);

// shift myArray and save the element in a var:
var removedFromMyArray = myArray.shift();
console.log("myArray after shifting is:\t", myArray);
console.log("The element removed was:\t", removedFromMyArray);
