/* SWITCH statement can be easier to write than 
a bunch of chained IF/ELSE IF statements
(for one, there are a LOT less brackets). 
Observe:

// IF/ELSE IF example:
if (val===1) {
  answer = "a";
} else if (val===2) {
  answer = "b";
} else {
  answer = "c";
}

// same as above, but in SWITCH form:
switch(val) {
  case 1:
    answer="a";
    break;
  case 2:
    answer="b";
    break;
  case 3:
    answer="c";
    break;
}

Isn't it nice?
*/


function chainToSwitch(val) {
  var answer = "";
  switch(val) {
    case "bob":
      answer="Marley";
      break;
    case 42:
      answer="The Answer";
      break;
    case 1:
      answer="There is no #1";
      break;
    case 99:
      answer="Missed me by this much!";
      break;
    case 7:
      answer="Ate Nine";
      break;
    // not putting in the DEFAULT clause, because
    // the ANSWER var just stays an empty string as
    // initialized, if no case clauses match.
  }
  return answer;
}

// TEST CASES
console.log(chainToSwitch("bob"));
console.log(chainToSwitch(1));
console.log(chainToSwitch(42));
console.log(chainToSwitch(99));
console.log(chainToSwitch(7));
console.log(chainToSwitch("John"));
console.log(chainToSwitch(156));
