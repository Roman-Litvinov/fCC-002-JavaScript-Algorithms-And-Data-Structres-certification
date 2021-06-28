// Only change code below this line
var a=5;
var b=10;
var c="I am a";
// keeping d undefined - declared, but not given any value
// (which results in it having the initial value of undefined)
var d;
// Only change code above this line

a = a + 1;
b = b + 5;
c = c + " String!";

// do a map operation and a string operation using the undefined varible:
var mathOpWithUndefined = d + 1;                      // result will be NaN - Not A Number
var concatenationWithUndefined = d + " some string";  // result will be a string "undefined" concatenaed with " some string"

// check the values of variables a, b, and c:
console.log(a);
console.log(b);
console.log(c);

// check the results of math and string operations with undefined variable:
console.log(mathOpWithUndefined);
console.log(concatenationWithUndefined);

