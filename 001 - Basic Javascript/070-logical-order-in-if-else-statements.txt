// Proper order of IF/ELSE IF statements is important!

// Code in a function is executed from top to bottom, and return statements
// stop code execution for anything that follows them in a function, - thus
// no other additional ELSE IF checks are done.

// Therefore, make sure that specific conditions that could be encompassed 
// by other conditions are checked for first, and conditions that encompass
// others are checked for later.

// EXAMPLE:
// In the below function we check if the number is:
// - less than 5, 
// - less than 10,
// - greater or equal to 10.
// If we check if the number is less than 10 first, and the number is 3,
// we'll never get to check if the number is less than 5, because "less than 10"
// also includes "less than 5".
// Therefore, we have to check for "less than 5" first:
function orderMyLogic(val) {
  if (val < 5) {
    return "Less than 5";
  } else if (val < 10) {
    return "Less than 10";
  } else {
    return "Greater than or equal to 10";
  }
}

// TEST CASES:
console.log(orderMyLogic(4));
console.log(orderMyLogic(6));
console.log(orderMyLogic(10))
console.log(orderMyLogic(11));
console.log(orderMyLogic("11"));
