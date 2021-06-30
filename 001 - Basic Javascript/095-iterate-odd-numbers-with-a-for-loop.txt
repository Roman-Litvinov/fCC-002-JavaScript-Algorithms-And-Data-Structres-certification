// fill the array with even numbers from 0 to 8 (yes, 0 is an even number)
// using FOR loop and incrementing by 2 instead of 1:
var ourArray=[];
for (let i=0; i <=8; i+=2) {
  ourArray.push(i);
}
console.log(ourArray);
// Below will throw "ReferenceError: i is not defined" error - because 
// we used the "let" keyword to declare the variable "i" within the loop!
// That means that this variable is local to the FOR loop (it only exists
// within it and isn't defined outside of this scope):

// console.log(i);


// push the odd numbers from 1 through 9 to myArray using FOR loop:
var myArray = [];
// init the iteration counter:
var counter = 0;
for (let i=1; i<=9; i+=2) {
  // add the odd number to the array:
  myArray.push(i);
  
  // NOTE: we can increment the iteration counter here, using ++ operator
  // POSTFIX, i.e. AFTER the variable name, as follows...
  // counter++;
  // ...or we can increment the iteration counter here, using increment 
  // operator ++ PREFIX, i.e. BEFORE the variable name. If we used it 
  // POSTFIX as above, the below line would print the value of the COUNTER 
  // variable that it had BEFORE being incremented:
  console.log('i is:',i, ', iteration is:',++counter);
}
console.log(myArray);
console.log(counter);