// define a function that takes 1 argument,
// multiplies it by 5, and returns the result:
function timesFive(param1) {
  // return the argument times 5:
  return param1*5;
}

// NOTE - the value to return can be enclosed in parentheses.
// The below 2 lines do the same thing and are equally correct:
// 
// return a + b;
// return (a + b);


console.log(timesFive(6));

console.log(timesFive(5));
console.log(timesFive(2));
console.log(timesFive(0));

var answer = timesFive(14);
console.log("14 times 5 is " + answer + ".");
