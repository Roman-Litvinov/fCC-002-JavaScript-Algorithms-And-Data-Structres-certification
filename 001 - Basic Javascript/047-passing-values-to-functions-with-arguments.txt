/* PARAMETERS vs. ARGUMENTS

PARAMETERS are variables that will hold the values that are passed to the function
when it's called. Parameters are specified in the function definition.

ARGUMENTS are actual values that are passed to the function when it's called.
The function takes these values and uses them as parameters.
*/

// definition of a testFun function - with 2 parameters, param1 and param2:
function testFun(param1, param2) {
  console.log(param1, param2);
}

// call to the testFun function - with 2 arguments, "Hello" and "World":
testFun("Hello","World");

// define a function that takes 2 arguments and outputs
// their sum to the dev console:
function functionWithArgs (param1, param2) {
  console.log(param1 + param2);
}

// call the function with 2 numbers as arguments:
functionWithArgs(7,9);
