/* parseInt() can accept a 2nd argument - a RADIX:

parseInt(string, radix)

That determines the BASE of the number in the string which
is given as the 1st argument - meaning the base of the numeric
system that the number should be in.

For example, decimal numbers have a base/radix of 10,
binary numbers have a radix of 2, hexadecimal numbers have
a radix of 16.
*/

// Example - parsing a string which contains a binary number,
// converting it to a decimal number, and returning that:
var parsedBinary = parseInt("11", 2);
console.log('Binary \"11\" converts to',parsedBinary,'in decimal.');

// Another example - convert a hex string into decimal integer:
var someHex = 10;
console.log("Hex \"" + someHex + "\" converts to " + parseInt(someHex, 16) + " in decimal.");

// define a function that takes a string containing a binary number
// as an argument, converts it to a (decimal) integer, and returns it:
function convertToInteger(str) {
  let parsedNum = parseInt(str, 2);
  return parsedNum;
}

// TEST CASES:
// should return 19:
console.log(convertToInteger("10011"));
// should return 57:
console.log(convertToInteger("111001"));
// should return a NaN:
console.log(convertToInteger("JamesBond"));

