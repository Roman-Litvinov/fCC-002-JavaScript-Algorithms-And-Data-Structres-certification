// table of possible val cases and corresponding answer values:
// range from 1 to 3 - Low
// range from 4 to 6 - Mid
// range from 7 to 9 - High

// check which range val falls into, and set the answer accordingly,
// by grouping case clauses with no break statements:
function sequentialSizes(val) {
  var answer = "";
  switch(val) {
    default:
      answer="Not in range";
      break;
    case 1:
    case 2:
    case 3:
      answer="Low";
      break;
    case 4:
    case 5:
    case 6:
      answer="Mid";
      break;
    case 7:
    case 8:
    case 9:
      answer="High";
      break;
  }
  return answer;
}

// TEST CASES:
console.log(sequentialSizes(0));
console.log(sequentialSizes(1));
console.log(sequentialSizes(2));
console.log(sequentialSizes(3));
console.log(sequentialSizes(4));
console.log(sequentialSizes(5));
console.log(sequentialSizes(6));
console.log(sequentialSizes(7));
console.log(sequentialSizes(8));
console.log(sequentialSizes(9));
console.log(sequentialSizes("9"));
console.log(sequentialSizes(85));




