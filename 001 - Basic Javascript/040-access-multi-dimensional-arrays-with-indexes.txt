// Multi-dimensional array is an array of arrays, with arrays
// being elements and even having other arrays as their own
// elements, such as the complex nested array below.

var myArray = [
  [1,2,3], 
  [4,5,6], 
  [7,8,9], 
  [[10,11,12], 13, 14]
  ];

// To access elements within such arrays, we use bracket notation
// and index of the element. To access elements within elements,
// we continue with additional pairs of brackets to address elements
// on subsequent levels going deeper in.

// We need to get the element of myArray that equals 8, using indices 
// and bracket notation. First we access the element indexed 2 on 
// the top level - which is itself an array, [7,8,9]. Then, using 
// the 2nd pair of brackets, we access the element of THAT array with
// the index of 1 (so its 2nd element) - which equals 8.

var myData = myArray[2][1];

console.log(myData);