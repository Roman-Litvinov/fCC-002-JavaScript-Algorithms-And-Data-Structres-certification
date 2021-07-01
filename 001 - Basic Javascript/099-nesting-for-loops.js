// make the function that takes an array
// as an argument and returns a product of all
// its elements (assume they're all numbers OR
// nested arrays of numbers).

// FLOW:
// - D&I the total product var to 1 (not 0, duh!)
// - iterate through the top array's elements
// - iterate through nested arrays' elements
// - multiply the total product by each element at the bottom level
// - return the total product


function multiplyAll(arr) {
  // D&I the total:
  var product = 1;
  // iterate through top array elements:
  for (let i=0; i<arr.length; i++) {
    // iterate through elements of each array
    // nested as the top array's element:
    for (let j=0; j<arr[i].length; j++) {
      // multiply the running total product by the current element,
      // show both and the resulting total product:
      console.log(product, "*",arr[i][j],"=", product *=arr[i][j]);
    }
  }
  // return the final total product::
  return product;
}
// check it:
console.log(multiplyAll([[1,2],[3,4],[5,6,7]]));