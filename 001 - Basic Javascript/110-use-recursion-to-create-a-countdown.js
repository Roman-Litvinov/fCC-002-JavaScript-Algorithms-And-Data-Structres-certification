// EXAMPLE
// define a recursive function to create a count-up:
// - take a number as an argument,
// - return an array of consecutive integers starting
//   with 1 through the received number
//
// This recursive function will have:
// - a base case, where the function returns a specific value
//   (maybe f(0), returning an empty array?)
// - a recursion call to itself with a decremented parameter
//
// Recursive logic:
// f(N) =   [1,2,..,N-2,N-1,N]
// f(N-1) = [1,2,..,N-2,N-1]
// f(N-2) = [1,2,..,N-2]
// ...
// f(2) =   [1,2]
// f(1) =   [1]
// f(0) =   []  <-- base case?

function countUp(n) {
  // set up the base case - when n is 0:
  if (n < 1) {
    // return an empty array (thus initializing the final array):
    return [];
  } else {
    // init the final array by assigning it the result of the recursive
    // function call to itself with the next smaller argument:
    var upArray = countUp(n-1);
    // append the current value to the resulting array - which has been
    // returned from the recursive call to itself with the previous smaller
    // argument:
    upArray.push(n);
    // return the updated final array:
    return upArray;
  }
} 
console.log(countUp(7));


// return an array of integers, counting
// down from the given number N to 1:
function countdown(n) {
  if (n < 1) {
    // base case - return an empty array and go back up the recursions:
    return [];      
  } else
    // recurse down with a smaller argument:
    var downArray = countdown(n-1);
    // add current argument to the front of the array:
    downArray.unshift(n);
    // return function result - either up the recursions or final result:
    return downArray;
}

// TEST CASES:
// should return an empty array:
console.log(countdown(-1));
// should return [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]:
console.log(countdown(10));
// should return [5, 4, 3, 2, 1]:
console.log(countdown(5));
// should return an empty array:
console.log(countdown(0));




// A LITTLE SIDE EXPERIMENT - use CONCAT() method of arrays
// to merge an array to an array, without changing the order
// of elements.
// CONCAT() method returns an array as a result:
var myArray = [1,2,3].concat([1,2,5]);
// console.log(myArray);