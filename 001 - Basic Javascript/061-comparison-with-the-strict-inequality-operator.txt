// !== STRICT INEQUALITY OPERATOR
// - returns TRUE when values are not equal (most cases)
// - returns FALSE when values are STRICTLY equal
// - does NOT perform data type coercion
// - opposite of === strict equality operator

// example of check for strict inequality:
function testStrictNotEqual(val) {
  // return "Not Equal" when either 
  if (val !== 17) {
    return "Not Equal";
  }
  return "Equal";
}

// will output "Not Equal" - data type matches, but not value
console.log(testStrictNotEqual(10));
// will output "Equal" - both data type and value match
console.log(testStrictNotEqual(17));
// will output "Not Equal" - because string "17" does NOT get converted to number 17
console.log(testStrictNotEqual("17"));
