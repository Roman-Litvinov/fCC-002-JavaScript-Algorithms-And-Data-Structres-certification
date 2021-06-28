// != (LOOSE) INEQUALITY OPERATOR
// - returns "true" when values aren't equal
// - returns "false" when they are
// - performs data type coercion


// example function:
function testNotEqual(val) {
  if (val != 99) {
    // this code runs if above condition is evaluated to "true",
    // when the value of val is not equal to 99:
    return "Not Equal";
  }
  return "Equal";
}

// says Not Equal:
console.log(testNotEqual(10));
// says Equal:
console.log(testNotEqual(99));
// again, says Equal - "99" gets converted to 99 for comparison:
console.log(testNotEqual("99"));
