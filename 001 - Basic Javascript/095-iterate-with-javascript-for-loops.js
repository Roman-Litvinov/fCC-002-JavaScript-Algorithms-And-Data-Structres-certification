/* FOR loop
FOR loops are declared with 3 optional expressions separated by semicolons (MANDATORY!):

    for (a; b; c) {
        loop code statement(s), if any;
    }

where:
a - INITIALIZATION - only executes ONCE before the loop starts,
    usually sets up and defines the LOOP COUNTER.
    Initialization is optional, the counter can be set up outside of the loop.

b - CONDITION - evaluates at the START of EVERY LOOP ITERATION,
    the loop only goes ahead and executes its code if this evaluates to TRUE,
    if this evaluates to FALSE, the loop stops executing or doesn't even start.
    Condition is optional - we can break out of the loop by other means
    in the loop code.

c - FINAL EXPRESSION - executes at the END of every loop iteration, 
    AFTER the loop statements have executed, but BEFORE the next condition check happens, 
    this is usually used to update the LOOP COUNTER.
    Final expression is optional - we can update the loop counter in the loop code.

IMPORTANT - if condition is used, make sure that at some point it checks to FALSE,
otherwise we get an infinite loop which we'll have to break out off by some other means.
*/


// example FOR loop
// - set up an empty array
// - fill it with numbers from 0 to 4
// - loop runs 5 times
// - loop ends once i increments to 5
var ourArray = [];
for (var i=0; i<5; i++) {
    // execute this every loop iteration
    ourArray.push(i);
    console.log(ourArray);
    // check what i is currently, 
    // BEFORE IT GETS UPDATED BY FINAL LOOP STATEMENT:
    console.log(i);
}
// check the array:
console.log(ourArray);
// check which value of i we finish at:
console.log(i);




// set up a FOR loop to push values 1 through 5 onto myArray:
var myArray = [];
for (let count=0; count<5; count++) {
    myArray.push(count+1);
    console.log(count+1);
}
console.log(myArray);

