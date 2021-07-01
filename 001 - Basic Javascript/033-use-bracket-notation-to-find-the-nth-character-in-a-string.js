/* MORE BRACKET NOTATION
  To get any-numbered character in a string, use bracket notation
  with an index for the character.
  
  NOTE:
  JS indices start with 0, so to get the index to use,
  subtract 1 from the character number.
*/

// find the 3rd character in the string (index to use is 3-1=2):
var lastName = "Lovelace";
var thirdLetterOfLastName = lastName[2];
console.log("The 3rd character is "+thirdLetterOfLastName+".");
