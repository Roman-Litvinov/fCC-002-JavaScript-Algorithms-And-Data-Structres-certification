// EXAMPLE
// write a function using IF/ELSE IF/ELSE statements
// to compare 2 numbers and see which one is greater,
// or detect if they are equal:
function findGreaterOrEqual1(a, b) {
  if (a === b) {
    return 'a and b are equal';
  }
  else if (a > b) {
    return 'a is greater';
  } else {
    return 'b is greater';
  }
}
console.log(findGreaterOrEqual1(4, 7));

// now re-write the above function using 
// chained ternary operators:
function findGreaterOrEqual2(a, b) {
  return (a === b) ? 'a and b are equal'    //  runs if numbers are equal
    : (a > b) ? 'a is greater'              //  runs if numbers not equal and a is greater
    : 'b is greater';                       //  runs if numbers not equal and b is greater
}
console.log(findGreaterOrEqual2(4, 7));




// write a function to check if the number given
// is positive, negative, or equals 0.
// Use chained ternary operators:
function checkSign(num) {
  // check if number is zero:
  return (num === 0) ? "zero" :
    // if not zero, check if it's positive or negative:
    (num > 0) ? "positive" : "negative";
}

// TEST CASES:
// should return "positive":
console.log(checkSign(10));
// should return "negative":
console.log(checkSign(-12));
// should return "zero":
console.log(checkSign(0));