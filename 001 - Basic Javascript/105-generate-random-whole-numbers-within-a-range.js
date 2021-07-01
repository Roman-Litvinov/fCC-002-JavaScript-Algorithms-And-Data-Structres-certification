// make a function that:
// - takes a range limits myMin and myMax as arguments
// - returns a random whole number randomIntNum
// - myMin <= randomIntNum && myMax >= randomIntNum
//   (randomIntNum is between myMin and myMax, including both)

function randomRange(myMin, myMax) {
  return Math.floor(Math.random()*(myMax-myMin+1))+myMin;
}

