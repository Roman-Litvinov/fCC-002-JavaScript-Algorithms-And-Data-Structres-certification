// Function doesn't have to have a RETURN statement.
// In such a case, when the function runs, it returns
// the value of UNDEFINED.


// declare a global variable and give it a value:
var sum = 0;
console.log("sum starts as:",sum);

// define a function which doesn't have a return statement,
// but still operates on a global variable:
function addThree() {
  // increase the global variable sum by 3:
  sum = sum + 3;
}

// save the value returned by addThree() - which is undefined:
var returnThree = addThree();
console.log("We ran addThree(). Return value of addThree():",returnThree);
console.log("After running addThree(), sum is now:",sum,"\n");

function addFive() {
  sum +=5;
}

var returnFive = addFive();
console.log("We ran addFive(). Return value of addFive():",returnFive);
console.log("After running addFive(), sum is now:",sum);
