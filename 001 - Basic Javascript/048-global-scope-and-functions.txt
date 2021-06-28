// Declare the myGlobal variable below this line

// this variable is defined outside of a function block,
// thus it has a global scope and is accessible from EVERYWHERE,
// including from inside function blocks:
var myGlobal;
myGlobal = 10;

function fun1() {
  // Assign 5 to oopsGlobal Here

  // this variable is declared without using the VAR keyword,
  // thus it automatically has the global scope and is accessible
  // from EVERYWHERE, including outside of this function block
  // and inside other function blocks:
  oopsGlobal = 5;
}

// Only change code above this line

function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}