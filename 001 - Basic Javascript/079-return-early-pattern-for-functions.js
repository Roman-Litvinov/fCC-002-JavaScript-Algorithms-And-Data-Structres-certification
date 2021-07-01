// RETURN statements stop the function code execution immediately
// and return the flow to the calling location.
// Example:

function someFunc() {
  console.log("Hello!");
  return "World";
  console.log("Good-bye now...");   // this line will never execute
}
// We'll see "Hello!" output in console,
// and then also "World" - which is the return value of the function:
console.log(someFunc());


// If a or b are less than 0, immediately exit with a value of undefined,
// otherwise do some calculations involving square roots, etc.
// NOTE: not specifically putting in "return undefined;", because a function
// returns undefined by default anyway, if no actual value to return is
// specified:
function abTest(a, b) {
  if (a < 0 || b < 0) {
    return;
  } else {
    // console.log(a);
    // console.log(b);
    // do stuff, but only if neither a or b is less than 0:
    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
  }
}

// TEST CASES:
console.log(abTest(2, 2));
console.log(abTest(-2, 2));
console.log(abTest(2, -2));
console.log(abTest(2, 8));
console.log(abTest(3, 3));
console.log(abTest(0, 0));
