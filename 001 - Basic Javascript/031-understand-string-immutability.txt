// String values are IMMUTABLE - once created, they can't be changed.
// Example - we can't fix our fuck-up by trying to change a character
// in a string literal that we've assigned to a variable:
/*

var someStr = "Jello World";
someStr[0] = "H";

*/
// JS would throw an error saying "TypeError: 0 is read-only".
// Instead, we'd have to assign a new, correct, string value to the variable,
// as in the example below:

var myStr = "Jello World";

myStr = "Hello World";


