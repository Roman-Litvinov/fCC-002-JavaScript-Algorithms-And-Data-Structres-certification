// Logical AND operator && returns TRUE if, and 
// only if, OPERANDS on both sides of it are TRUE.

// same effect can be achieved by nesting one IF statement
// inside another IF statement. Example:

// using && operator inside a function:
function someFunction1 (condition1, condition2) {
  if (condition1 && condition2) {
    return "Both conditions are true!";
  }
  return "Both conditions are not true!";
}

// same thing, but using 2 IF statements:
function someFunction2 (condition1, condition2) {
  if (condition1) {
    if (condition2) {
      return "Both conditions are true!";
    }
  }
  return "Both conditions are not true!";
}

// ----------------------------------------------------------------

// check if a number is between 25 and 50 (including both):
function testLogicalAnd(val) {
  if (val <= 50 && val >= 25) {
    return "Yes";
  }
  return "No";
}
// tests:
console.log(testLogicalAnd(0));
console.log(testLogicalAnd(24));
console.log(testLogicalAnd(25));
console.log(testLogicalAnd(30));
console.log(testLogicalAnd(50));
console.log(testLogicalAnd(51));
console.log(testLogicalAnd(75));
console.log(testLogicalAnd(80));
console.log(testLogicalAnd("80"));