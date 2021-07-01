/* RANDOM NUMBER GENERATION
Math.random() function return a decimal between 0 (inc) and 1 (exc),
which means that it can return 0, but cannot ever return 1.
You can say that the following is always TRUE:

    Math.random() >=0 && Math.random() <1 

To generate a random number in a certain range from 0(inc) to N(exc), you could 
do something like the following (basically evaluate Math.random() and multiply
the result by the desired range):

    someRandomNumber = Math.random() * N;
*/


// return a random number:
function randomFraction() {
  return Math.random();
}
console.log(randomFraction());
