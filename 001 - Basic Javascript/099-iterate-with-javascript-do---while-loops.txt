/*  DO...WHILE loop
  - executes the loop code at least once, no matter what (primary purpose?),
  - continues to execute while the specified condition is TRUE,
  - exits once the specified condition is FALSE
*/


// Example - this runs 5 times (and at least once):
var ourArray = [];
// set up the counter:
var i = 0;
do {
  // this runs at least once, no matter what:
  console.log("i is", i);
  ourArray.push(i);
  i++;
  // then we do a condition check,
  // if TRUE - run the loop code again,
  // if FALSE (when i reaches 5) - exit the loop:
} while (i < 5);
console.log("ourArray is", ourArray);
console.log("i is",i,"\n");


// Example - same as above, but we start with the condition 
// already being FALSE, and the loop code runs once ANYWAY:
var ourArray = [];
var i = 5;
do {
  // this runs at least once, no matter what:
  console.log('i is', i);
  ourArray.push(i);
  i++;
  // then we do a condition check, and it's FALSE
  // ( i = 5), so we exit the loop:
} while (i < 5);
console.log("ourArray is", ourArray);
console.log('i is', i,'\n');




// set up the DO...WHILE loop instead of WHILE,
// only push 10 to myArray, i should be 11 once
// the code finishes:

var myArray = [];
var i = 10;
do {
  myArray.push(i);
  i++;
} while (i<5);
console.log("myArray is", myArray)
console.log('i is', i,'\n');

