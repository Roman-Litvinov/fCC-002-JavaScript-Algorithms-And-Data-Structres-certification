// Use IF/ELSE IF statements to check for multiple conditions
// and execute multiple blocks of code


// using IF/ELSE IF statements, see if the number is either:
// - smaller than 5, or
// - greater than 10, or
// - is between 5 and 10 (including 5 and 10):
function testElseIf(val) {
  if (val < 5) {
    return "Smaller than 5";
  } else if (val > 10) {
    return "Greater than 10";
  } else {
    return "Between 5 and 10";
  }
}

// tests:
console.log(testElseIf(0));
console.log(testElseIf(5));
console.log(testElseIf(7));
console.log(testElseIf(10));
console.log(testElseIf(12));
console.log(testElseIf("12"));
