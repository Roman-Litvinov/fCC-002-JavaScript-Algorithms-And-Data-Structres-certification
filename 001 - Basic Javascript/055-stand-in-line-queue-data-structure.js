// QUEUE data structure is an ordered list of elements,
// working on a first-in-first-out principle - thus new
// elements are added to the end of the queue and old 
// elements are removed from the front of the queue.

// We can use arrays to set up the queue in JS,
// using push() method to add elements at the end of
// the array and shift() method to remove elements at
// the front of the array.

// take an array and a number as arguments,
// add the number to the end of the array,
// then remove the 1st element of the array,
// and return the removed element:
function nextInLine(arr, item) {
      // append item to the array's end:
  arr.push(item);
      // remove the first element of the array and save it in item
      // (which is a variable that we used to hold the initial argument,
      // so we're reusing the var name? Is this a good idea? Oh well,
      // the lesson wants "item" returned, it gets "item" returned...):
  item = arr.shift();
      // return "item":
  return item;
}

// VARIOUS TESTS:
var testArr = [1,2,3,4,5];
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 5));
console.log("After: " + JSON.stringify(testArr));

testArr = [];
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 1));
console.log("After: " + JSON.stringify(testArr));

testArr = [2];
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 1));
console.log("After: " + JSON.stringify(testArr));

testArr = [5,6,7,8,9];
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 1));
console.log("After: " + JSON.stringify(testArr));

testArr = [1,2,3,4,5];
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 10));
console.log("After: " + JSON.stringify(testArr));
console.log(testArr[4]);