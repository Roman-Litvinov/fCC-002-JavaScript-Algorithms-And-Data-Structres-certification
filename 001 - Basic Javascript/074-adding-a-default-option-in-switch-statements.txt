// conditions to check and string values to set answer var to:
// a - apple
// b - bird
// c - cat
// default - stuff <-- This is the catch-all DEFAULT value!

function switchOfStuff(val) {
  var answer = "";
  switch(val) {
    case "a":
      answer="apple";
      break;
    case "b":
      answer="bird";
      break;
    case "c":
      answer="cat";
      break;
    // DEFAULT statement is executed if no 
    // matching case clauses are found:
    default:
      answer="stuff";
      break;
  }
  // return whatever answer has been set to:
  return answer;
}

// TEST CASES:
console.log(switchOfStuff("a"));
console.log(switchOfStuff("b"));
console.log(switchOfStuff("c"));
console.log(switchOfStuff("d"));
console.log(switchOfStuff(4));

