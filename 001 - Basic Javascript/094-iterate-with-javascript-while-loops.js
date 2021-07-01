// WHILE loop runs while the condition is TRUE,
// and stops once the condition is FALSE.

// NOTE - this means that if condition never changes to FALSE,
// the loop will be infinite, and we'll have to break out by
// some other means.


// Example WHILE loop
// This will execute 5 times.
// The loop will stop once the check (i < 5) fails, which happens once we increment i from 4 to 5.
// The count i will go 0, 1, 2, 3, 4, and finally 5, - that's the value of i once we're out of the loop.

// init an empty array:
var ourArray = [];
// init the count:
var i = 0;
// do the check - and while count is less than 5...
while(i < 5) {
  // append the count to the end of the array:
  ourArray.push(i);
  console.log(ourArray);
  // increment the count:
  i++;
}
// check i, to be sure it's 5:
console.log(i);



// add numbers 5 through 0 (inclusive) in DESCENDING order
// to myArray using a WHILE loop:
var myArray = [];
var count = 5;
while (count >= 0) {
  // push the count value into the array
  // (append it to the end of the array):
  myArray.push(count);
  // decrement the count:
  count--;
  // check what we got so far:
  console.log(myArray);
}
// check the final value of the count:
console.log(count);