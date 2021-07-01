// Setup
var firstLetterOfLastName = "";
var lastName = "Lovelace";

// We can get a character at a specific place (INDEX) within a string
// by using BRACKET NOTATION - using the index number inside square
// brackets. 

// NOTE: indices start at 0, not 1, because JS uses ZERO-BASED INDEXING,
// so the very 1st character in a string would have the index of 0.

// get the very first character of the last name:
firstLetterOfLastName = lastName[0];
console.log("The first letter of the last name is "+firstLetterOfLastName+".");
