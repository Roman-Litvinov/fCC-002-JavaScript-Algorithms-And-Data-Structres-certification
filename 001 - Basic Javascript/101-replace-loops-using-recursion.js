/*  RECURSION, also know as sexy magic
    - means a function can be expressed in terms of itself
    - a recursive function contains a call to itself in its code

A recursive function should have a BASE CASE in its code that returns
something without calling the function again - otherwise the function
will never stop executing. Usually the actual calculation begins from
the base case.
*/

// EXAMPLE
// write a function using loops that takes the first 
// N elements of an array and returns their product:
function multiply(myArray, n) {
  var product = 1;
  for (var i = 0; i < n; i++) {
    product *= myArray[i];
  }
  return product;
}
console.log(multiply([1,2,3,4,5], 4));


// now make the above into a recursive function
// that calls itself and doesn't use any loops:
function multiplyRecursive(myArray, n) {

}



// write a recursive function that returns the sum
// of the first N elements of the array ARR:
function sum(arr, n) {
  // BASE CASE - reached when we call sum(arr, 0) from sum(arr, 1), so we return 0,
  // then we start going back up: to sum(arr, 1), returning 0 + arr[0],
  // and to sum(arr, 2), returning 0 + arr[0] + arr[1],
  // and to sum(arr, 3), returning 0 + arr[0] + arr[1] + arr[2],
  // and so on, until we reach N and the return value is: 0 + arr[0] + arr[1] + arr[2] + ... + arr[N-1],
  // which is the sum of the first N elements of the array - that have indices from 0 to N-1:
  if (n == 0) {
    return 0;
  } else {
    return sum(arr, n-1) + arr[n-1];
  }
}

// TEST CASES:
// should return 0:
console.log('\n'+sum([1], 0));
// should return 2:
console.log(sum([2,3,4], 1));
// should return 9:
console.log(sum([2,3,4,5], 3));
