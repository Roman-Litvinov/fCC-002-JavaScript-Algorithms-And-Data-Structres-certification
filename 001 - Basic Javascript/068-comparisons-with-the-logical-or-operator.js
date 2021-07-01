/*  Logical OR operator || (2 pipe symbols "|")
    returns TRUE if EITHER one of the operands (or both) is TRUE,
    returns FALSE if BOTH operands are FALSE:
    - true || true - true
    - true || false - true
    - false || true - true
    - false || false - false
*/

// using || operator, check if a value is not between 10 and 20 (including both 10 and 20),
// return "Outside" if yes, return "Inside" if no:
function testLogicalOr(val) {
  if (val <10 || val >20) {
    return "Outside";
  }
  return "Inside";
}

// TESTS:
console.log(testLogicalOr(0));
console.log(testLogicalOr(9));
console.log(testLogicalOr(10));
console.log(testLogicalOr(15));
console.log(testLogicalOr(19));
console.log(testLogicalOr(20));
console.log(testLogicalOr(21));
console.log(testLogicalOr(25));
