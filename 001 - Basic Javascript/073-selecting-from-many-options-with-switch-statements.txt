

// test the value of the given parameter and return appropriate answer,
// use SWITCH to test for multiple case clauses:
function caseInSwitch(val) {
  // D&I local var answer to hold the value to return:
  var answer = "";
  // test the value of val using a SWITCH statement for 1,2,3, or 4:
  switch(val) {
    case 1:
      answer="alpha";
      // BREAK statement immediately breaks out of the SWITCH statement.
      // If there's no BREAK, the code execution will continue:
      break;
    case 2:
      answer="beta";
      break;
    case 3:
      answer="gamma";
      break;
    case 4:
      answer="delta";
      break;
  }
  // by now, answer either has been set to one of 4 possible values
  // by the SWITCH statement above, or was kept an empty string (in
  // case if none of the possible values of val were matched).
  // return the answer:
  return answer;
}

// TEST CASES:
console.log(caseInSwitch(1));
console.log(caseInSwitch(2));
console.log(caseInSwitch(3));
console.log(caseInSwitch(4));

// This will not return "delta" because switch cases are tested with STRICT equality
// (===), with no type coercion, so a string "4" won't get converted to number 4,
// thus CASE 4; condition won't return TRUE:
console.log(caseInSwitch("4"));

// Because there is no CASE checking for number 7, the ANSWER var will be left an empty string:
console.log(caseInSwitch(7));

