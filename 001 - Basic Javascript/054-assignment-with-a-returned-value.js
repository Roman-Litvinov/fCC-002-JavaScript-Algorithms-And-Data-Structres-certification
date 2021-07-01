var processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

// Before assignment operation is performed, everything on 
// the right side of = is calculated. Thus, we can call
// functions on the right side of the assignment and assign
// the returned value to whatever's on the left side.

// call processArg() with argument of 7
// and assign the returned value to processed var:
processed = processArg(7);
console.log(processed);