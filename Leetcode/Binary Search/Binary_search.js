
/*

Binary search 

You have a sorted aray and want to find a target number. 

*/


// O(log n) time and O(1) space
    // Searches are usually less than O(n)
    // since we're usually looking at less than the number of 
    // elements in the array
function binarySearch(array, target) {
	return binarySearchHelper(array, target, 0, array.length - 1)
}

// [3,4,5,6,7,8] target: 7
function binarySearchHelper(array, target, lowerBound, upperBound) {

	while(lowerBound <= upperBound) {
		const mid = Math.floor((lowerBound + upperBound) / 2)
		const aprox = array[mid];
		// low: 3, up: 8 
		// aprox: 6
		if(aprox === target) {
			return mid;
		} else if(target < aprox) {
			upperBound = mid - 1;
		} else {
			lowerBound = mid + 1;
		}
	}
	return -1;
}