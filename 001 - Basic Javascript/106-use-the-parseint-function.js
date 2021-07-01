/* parseInt() function parses a string and returns an integer.

parseInt() will parse the string until it reaches the character
that cannot be converted into a number, and return whatever it
was able to convert up to that point. For example,

      parseInt('113someStuff15')

will return a number value 113.

If the first character in the string can't be converted into
a number, parseInt() returns a NaN value (Not A Number). For example,

      parseInt('someStuff15')

will return a NaN value
*/

// set up a function that converts the input string
// into an integer number and returns it:
function convertToInteger(str) {
  let resultNum = parseInt(str);
  return resultNum;
}

// TEST CASES:
console.log(convertToInteger("56"));
console.log(convertToInteger("77"));
console.log(convertToInteger("81"));
console.log(convertToInteger(81));
var weirdThing = "113JamesBond15";
console.log(convertToInteger(weirdThing));
var JamesBond = "007";
console.log(convertToInteger(JamesBond));
console.log(convertToInteger("JamesBond"));
