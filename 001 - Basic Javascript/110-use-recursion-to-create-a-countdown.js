// function that returns an array of numbers from start to N, recursively:
function countUp(start, n)
{
	if (n < start)
	{
		return [];		// this is the base case - this is where we initialize an empty array to start filling
	} else
	{
		let myArr = countUp(start, n - 1);	// recursive call to itself with a previous N - base case makes myArr an empty array after this
		myArr.push(n);						// appending a current N as an element to the end of the array
		return myArr;						// returning the array - either recursing up, or final output
	}
}
console.log(countUp(-3, 5));

// function that returns an array of numbers from N to 1, recursively:
function countdown(n)
{
	if (n < 1)
	{
		return [];		// base case - empty array is created here, with N being 0
	} else
	{
		let myArr = countdown(n - 1);		// recursive call to itself with a previous N - base case makes myArr an empty array after this
		myArr.unshift(n);				// add a current N as an element to  the beginning of the array (increasing the number as we recurse up)
		return myArr;					// returning the array - either recursing up, or final output
	}

}
// test cases
console.log(countdown(-1));
console.log(countdown(10));
console.log(countdown(5));
console.log(countdown(-7));
