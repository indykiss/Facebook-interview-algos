/*
For this file, I'm just going to run through the leetcode easy 
top interview questions module thing.

I've started it before but kept stopping because it's a bit hard for me sometimes. 

But going through as much of this as I can should be helpful in refreshing my DSAs.

I'm doing this to prep for Pinterest's code challenge. 

Topics include:
- Strings 
- Arrays 
- Linked Lists
- Trees
- Sorting and Searching
- Dynammic programming 
- Design
- Math
- Others 
*/


// Arrays! 

// Remove duplicates in place
// We just track the arr's LENGTH. So we just need to count the num of uniq vals
var removeDuplicates = function(nums) {
    nums = nums.sort((a,b) => a-b); 
    let i = 0;
    let j = 0;
    
    while (j < nums.length) {
        nums[i] = nums[j]; 
        i++;
        j++;
        while(nums[j] == nums[j-1]) {
            j++;
        }
    }
    return i;
} 

// Given an array, rotate the array to the right by k non-negative steps
// Input: nums = [-1,-100,3,99], k = 2
// Output: [3,99,-1,-100]
// Explanation: 
// rotate 1 steps to the right: [99,-1,-100,3]
// rotate 2 steps to the right: [3,99,-1,-100]
var rotate = function(arr, k) {
    let i = 0; 

    while (i < k) {
        // Really all the "shifting" is just moving nums off 
        // the end and adding to the front
        let numToPop = arr.pop();
        arr.unshift(numToPop);
        i++;
    }
    return arr;
}

// Two Sum - Given an arr and a target, return the two indices that sum up to the target
// [2,3,4], 6 => [0,2]

var twoSum = function(nums, target) {
    let seen = {};
    
    for(let i = 0; i < nums.length; i++) {
        let curr = nums[i],
            partner = target - curr,
            partnerID = seen[partner];
        if(partnerID !== undefined) {
           return [partnerID, i]
        }
        seen[curr] = i;
    }
}

// Single number: Given an arr of ints, every ele appears twice except for 1. Find the single one.
// [2,3,2,3,4] => 4
var singleNumber = function(arr) {
    let hash = {};
    // create hash of arr w/ vals & # of occurences
    for(let i = 0; i < arr.length; i++) {
        if(hash[arr[i]]) {
            hash[arr[i]] = 2;
        } else {
            hash[arr[i]] = 1;
        }
    }
    // Need to loop thru hash
    for(var j in hash) {
        if(hash[j] == 1) {
            return j;
        }
    }
}


// Strings! 

// Reverse a string in-place; don't allocate additional space
    // Two pointer approach

// ["a", "r", "e"] => ["e", "r", "a"]
var reverseString = function(s) {
    let i = 0;
    let j = s.length -1; 
    
    while(i < j) {
        if(i !== j) {
            [s[i], s[j]] = [s[j], s[i]]
        }
        i++;
        j--;
    }
    return s;
};