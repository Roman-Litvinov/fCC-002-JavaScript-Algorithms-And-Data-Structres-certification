// In IF/ELSE statement, when the condition is TRUE, the block of code after IF is executed.
// When the condition is FALSE, the block of code after ELSE is executed.


// use IF/ELSE statement instead of 2 IF statements,
// check if a number is bigger than 5 or not:
function testElse(val) {
  var result = "";
  if (val > 5) {
    result = "Bigger than 5";
  } else {
    result = "5 or Smaller";
  }
  return result;
}

// TESTS:
console.log(testElse(4));
console.log(testElse(5));
console.log(testElse(6));
console.log(testElse(10));
