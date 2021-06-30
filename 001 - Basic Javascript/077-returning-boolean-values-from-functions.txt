// All comparison operators return either TRUE or FALSE.
// This simplifies checking for Boolean values - we can
// get rid of some IF/ELSE statements:

function isLess(a, b) {
//  if (a < b) {
//    return true;
//  } else {
//    return false;
//  }

// all of the above is replaced by a single line:
  return a < b;
// which returns TRUE if a < b
// and returns FALSE otherwise (if a >= b)
}

// TEST CASES:
console.log(isLess(10, 15));
console.log(isLess(15, 10));
