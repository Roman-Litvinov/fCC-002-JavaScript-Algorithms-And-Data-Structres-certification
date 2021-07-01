/*  Conditional (ternary) operator 
can be used as a shortcut for IF/ELSE statements, checks the given condition
and executes one of 2 possible choices of expressions, returning the result 
of the execution. 

Ternary operator takes the following 3 operands:

  condition ? expressionIfTrue : expressionIfFalse

They are:
- condition - an expression that is, or can be coerced into, TRUE or FALSE
  (that's called a "truthy" or "falsy" value)
- expressionIfTrue - executes when condition is TRUE, the result is returned
- expressionIfFalse - executes when condition is FALSE, the result is returned
*/

// EXAMPLE:
// check the age, return "Beer!" if 21+, return "Juice!" if under 21:
var age = 25;
var barOrder = age >= 21 ? "Beer!" : "Juice!";
console.log("We're drinking", barOrder);

// EXAMPLE:
// function using IF/ELSE statement to check which number is larger:
function findGreater1(a, b) {
  if (a > b) {
    return "a is greater";
  }
  else {
    return "b is greater"
  }
}
console.log(findGreater1(5, -3));

// same function, re-written using the conditional operator:
function findGreater2(a, b) {
  return a > b ? "a is greater" : "b is greater";
}
console.log(findGreater2(5, -3));



// write a function that checks if 2 numbers are equal or not,
// and returns an appropriate message:
function checkEqual(a, b) {
  return (a === b ? "Equal" : "Not Equal");
}

// TEST CASES:
// should return "Not Equal":
console.log(checkEqual(1, 2));
// should return " Equal":
console.log(checkEqual(1, 1));
// should return "Not Equal":
console.log(checkEqual(1, -1));