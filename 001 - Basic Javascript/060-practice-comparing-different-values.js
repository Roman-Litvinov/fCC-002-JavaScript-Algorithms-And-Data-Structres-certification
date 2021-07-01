// compare how strict and loose equality operators work,
// on the fly:
console.log("3" == 3);      // returns TRUE, "3" is converted to 3
console.log("3" === 3);     // returns FALSE, no conversion takes place


function compareEquality(a, b) {
  // set up double quotes to show around strings:
  // first, empty string local vars:
  var quotes1="";
  var quotes2="";
  // fill them with actual double quote strings,
  // if arguments are strings:
  if (typeof(a)=="string") {
    quotes1 = "\"";
  }
  if (typeof(b)=="string") {
    quotes2 = "\"";
  }
  // show types of the arguments, adding double quotes
  // where needed if an argument is a string:
  console.log("The arguments are:");
  console.log("Type of " +quotes1+ a +quotes1+ " is "+ typeof(a));
  console.log("Type of " +quotes2+ b +quotes2+ " is "+ typeof(b));
  // STRICTLY compare the arguments, and only say 
  // they're equal if they ARE strictly equal:
  if (a === b) {
    return "Equal";
  }
  return "Not Equal";
}

// Do some tests:
console.log(compareEquality(10, "10"));
console.log(compareEquality(10,10));
console.log(compareEquality([3,"3","c"],5));
