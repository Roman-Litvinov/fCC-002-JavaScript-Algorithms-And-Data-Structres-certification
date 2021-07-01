var a = 48;
var b = 108;
var c = 33;

// Only change code below this line
a /= 12;
b /= 4;
c /= 11;
console.log(a);
console.log(b);
console.log(c);

/*  COMPOUND ASSIGNMENT - AUGMENTED DIVISION
  Operator /= performs 2 things in one step:
  1 - it divides a variable by a number
  2 - it assigns the result as the new value of that variable,
  like so: */

var someVar = 15;
// divide someVar's current value by 2.5, get 6, and assign 6
// to someVar as its new value:
someVar /= 2.5;
console.log("Just to check, someVar is now "+someVar+".");
