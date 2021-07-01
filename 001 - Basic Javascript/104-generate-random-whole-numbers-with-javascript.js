// MATH.FLOOR() function is used to round DOWN the number
// to the nearest integer.

// generate and return a random whole number between 0 and 9:
function randomWholeNum() {
  return Math.floor(Math.random()*10) ;
}
console.log(randomWholeNum());


// EXPERIMENT ===============================================
// to return a random whole number between X-Y, 
// INCLUSIVE of BOTH X and Y, we generate a random
// number in a range between 0 and N+1, and then
// round it down, like so:

// set lower and upper range limits (inclusive!):
var rangeMin = -10;
var rangeMax = 10;

// calculate a random integer number in the range
// between valMin and valMax, and return it:
function fullRangeRandomNumber(valMin, valMax) {
  let myNumber = Math.floor(valMin + Math.random()*(valMax-valMin+1));
  return myNumber;
}

// TESTING:
// set the required number:
var neededNum = -10;
// make an infinite loop - keep going and keep count of iterations
// until we hit the required number, then quit the loop and tell us
// how many tries it took:
for (let i=0;; i++) {
  let currentNum=fullRangeRandomNumber(rangeMin, rangeMax);
  if (currentNum === neededNum) {
    console.log("We got "+currentNum+" after "+i+" tries!");
    break;
  }
}
