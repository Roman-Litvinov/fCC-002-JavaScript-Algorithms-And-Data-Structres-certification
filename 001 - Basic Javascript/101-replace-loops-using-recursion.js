// muliply first N elements of the array - regular function:
function multiply(arr, n)
{
	let product = 1;
	for (let i = 0; i < n; i++)
	{
		product *= arr[i];
	}
	return product;
}
let myArray = [15, 20, 3, 2.5, 5];
let n = 100;
console.log("Product of the first " + n + " elements of the array", myArray, "is: " + multiply(myArray, n) + ".");

// multiply first N elements of the array - recursive function
// (now checking for N being 0 or larger than array's length!):
function multiplyRecursive(arr, n)
{
	if (n <= 0)
	{					// check for first 0 elements passed as an argument -> return undefined (included so as NOT to return 1!)
		return undefined;
	} else if (n > arr.length)
	{	// check if number of elements requested is larger than length of the array -> return all available elements
		return multiplyRecursive(arr, arr.length);
	} else if (n == 1)
	{			// base case - first 1 element -> return element 0
		return arr[n - 1];
	} else
	{						// otherwise, recursion
		return arr[n - 1] * multiplyRecursive(arr, n - 1);
	}
}
console.log("Product of the first " + n + " elements of the array", myArray, "is: " + multiplyRecursive(myArray, n) + ".");


// recursive function to return a sum of the first N elements of a given array
// (no edge cases checking implemented):
function sum(arr, n)
{
	if (n <= 0)
	{
		return 0;
	} else
	{
		return arr[n - 1] + sum(arr, n - 1);
	}
}
// test cases:
console.log(sum([1], 0));
console.log(sum([2, 3, 4], 1));
console.log(sum([2, 3, 4, 5], 3));