// example of equality comparison operator use:
function equalityTest(myVal) {
  // test if given parameter equals 10:
  if (myVal == 10) {
    // confirm it was:
    return myVal + " is Equal to 10.";
  }
  // say it wasn't:
  return myVal + " is Not Equal to 10.";
}
console.log(equalityTest(10));


// Setup a function that checks if the given parameter
// is equal to 12:
function testEqual(val) {
  if (val == 12) {
    return "Equal";
  }
  return "Not Equal";
}

console.log(testEqual(10));