// To find the Nth-to-last character in a string,
// use the index that equals the string's length minus N,
// like so:

var lastName = "Lovelace";

// find 2nd-to-last character in the string value of lastName var:
var secondToLastLetterOfLastName = lastName[lastName.length-2];
console.log("The 2nd to last letter of the last name is "+secondToLastLetterOfLastName+".");
