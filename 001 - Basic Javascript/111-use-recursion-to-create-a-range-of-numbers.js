// - take 2 numbers as arguments
// - startNum is always less than, or equal to, endNum
// - return an array of integers that:
//    - starts with startNum
//    - ends with endNum
// - if startNum equals endNum, return an array [startNum]
// - use recursion
// - do not use loops of any kind:

function rangeOfNumbers(startNum, endNum) {
  if (endNum < startNum) {
    return [];      // base case - init the result array
  } else {
    var rangedArray = rangeOfNumbers(startNum, endNum-1);   // recursive call
    rangedArray.push(endNum);       // update array resulting from recursive call
    return rangedArray;             // return updated array back up the recursions/exit out
  }
};

// TEST CASES:
// should return [1,2,3,4,5]:
console.log(rangeOfNumbers(1, 5));
// should return [6,7,8,9]:
console.log(rangeOfNumbers(6, 9));
// should return [4]:
console.log(rangeOfNumbers(4, 4));


