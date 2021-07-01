// Variables declared within a function, as well as function parameters,
// have LOCAL scope - which means that they are only accessible from 
// within that function. Example:

function myTest() {
  // declare a variable within a function - with a LOCAL scope:
  var locVar = "foo";
  // check what its value is:
  console.log("The value of locVar:", locVar);
}

// Now call the function - we'll get "foo" output, that's the local scope
// value of locVar inside the function when the function runs:
myTest();

/* Try and check the value of locVar from OUTSIDE of the function, and
  we'll get an error saying that "locVar is not defined" - because it's 
  a local scope variable, only visible/defined inside the function: */

// console.log("The value of locVar:", locVar);



function myLocalScope() {
  // declare a local var myVar:
  var myVar = "Boo!";
  console.log('inside myLocalScope', myVar);
}
// function runs, we see myVar's value outputted:
myLocalScope();

// But when we try to access it outside, directly,
// myVar is not defined outside of myLocalScope,
// thus we get "ReferenceError: myVar is not defined":
console.log('outside myLocalScope', myVar);