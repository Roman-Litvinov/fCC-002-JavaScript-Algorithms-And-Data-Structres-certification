// === (strict equality operator) doesn't do type coercion,
// unlike == (loose equality operator). 

// If value types are different,  === will evaluate the expression
// to FALSE, whereas == will try and convert the values to the same type.

// example of using a strict equality operator ===
function testStrict(val) {
  // check if val is strictly equal to 7:
  if (val === 7) {
    return "Equal";
  }
  return "Not Equal";
}

// will return "Not Equal":
console.log(testStrict(10));
// will return "Equal":
console.log(testStrict(7));

// In this case, === doesn't convert string "7" to number 7
// (will output "Not Equal"):
console.log(testStrict("7"));