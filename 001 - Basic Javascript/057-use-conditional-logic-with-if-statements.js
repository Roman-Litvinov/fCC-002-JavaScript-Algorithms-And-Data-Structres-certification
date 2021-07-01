// example of the conditional IF statement:

function test (myCondition) {
  if (myCondition) {
    // this code gets executed if condition checks as TRUE
    // (return statement stops the function code from going
    //  any further right away):
    return "It was true!"
  }
  // this code gets executed if condition didnt' check as TRUE
  // (meaning that the return statement in the above IF statement
  //  didn't execute, thus function code just kept on rolling):
  return "It was false, OMG!"
}
// what if it was true?
console.log(test(true));
// but what if it was false?
console.log(test(false));


// set up a function checking if the given parameter is true
// and reporting accordingly:
function trueOrFalse(wasThatTrue) {
  if (wasThatTrue) {
    return "Yes, that was true";
  }
  return "No, that was false";
}