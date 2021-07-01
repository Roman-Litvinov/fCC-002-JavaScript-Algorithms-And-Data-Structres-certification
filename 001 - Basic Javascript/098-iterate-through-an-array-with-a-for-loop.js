// we can use FOR loops to iterate through arrays,
// by going through their indices - from 0 to ARRAY.LENGTH-1
// (not to ARRAY.LENGTH - because indices start at 0 in JS!),
// like so:

// set up example array:
var myArray=[15, 3, "duh", 101, 16];
for (let i=0; i<myArray.length; i++) {
  console.log(myArray[i]);
}



// get the sum total of the array elements,
// by iterating through it and adding them to
// the "total" variable :
var myArr = [ 2, 3, 4, 5, 6];
var total = 0;
for (let i=0; i<myArr.length; i++) {
  total += myArr[i];
}
console.log("The sample array is:", myArr);
console.log("The total of its elements is "+ total +".");

