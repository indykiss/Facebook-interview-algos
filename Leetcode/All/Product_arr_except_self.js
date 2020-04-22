/*
Product of Array Except Self

Given an array nums of n integers where n > 1,  return an array output such
that output[i] is equal to the product of all the elements of nums except nums[i].

Example:

Input:  [1,2,3,4]
Output: [24,12,8,6]
Constraint: It's guaranteed that the product of the elements of any preffix or 
suffix of the array (including the whole array) fits in a 32 bit integer.

Note: Please solve it without division and in O(n).

Strategy: Get the product for all numbers before the index 
Get the product for all numbers after the index 
At the index number we're looking at in our return arr, 
 multiply together to get total product (except at index!)

O(n) time

[1,2,3,4] => 
[24,12,8,6]

*/ 

// Attempt #3. Not bad. Needed to do it the bad long way, then 
// remembered the short way almost completely 

var productExceptSelf = function(nums) {
    const res = [];
    let prev = 1;
    let post = 1; 
    
    for(let i = 0; i < nums.length; i++) {
        res[i] = prev;
        prev = prev * nums[i]
    }
    
    for(let j = nums.length - 1; j >= 0; j--) {
        res[j] = res[j] * post;        
        post = post * nums[j];
    }
    return res;
} 

// var productExceptSelf = function(nums) {
    
//     const preProds = [];
//     let prevProds = 1;
//     const postProds = [];
//     let postProd = 1;
//     const res = [];
    
//     for(let i = 0; i < nums.length; i++) {
//         let add1 = nums[i] * prevProds; 
//         preProds.push(add1)
//         prevProds = prevProds * nums[i]
//     }
    
//     for(let j = nums.length - 1; j > 0; j--) {
//         let add2 = nums[j] * postProd;
//         postProds.push(add2);
//         postProd = postProd * nums[j];
//     }
    
//     while(preProds.length && postProds.length) {
//         res.push(preProds[0] * postProds[0]);
//         preProds.unshift();
//         postProds.unshift();
//     }
//     return res;
    
// };



// Attempt #2 
var productExceptSelf = function(nums) {
    const arr = [];
    let pre = 1;
    let post = 1; 
    
    // Loop until the index in nums
    for(let i = 0; i < nums.length; i++) {
        arr[i] = pre;
        pre = pre * nums[i]
    }
    
    // Loop from the end of nums until index
    for(let j = nums.length - 1; j >= 0; j--){
        arr[j] = arr[j] * post;
        post = post * nums[j]
    }
    return arr;
}





// Attempt # 1
var productExceptSelf = function(nums) {
    let prodAllMinusIndex = [];
    let preIndexProd = 1;
    let postIndexProd = 1;
    // Get product of all preIndex. Loop starting from front
    for(let i = 0; i < nums.length; i++) {
        prodAllMinusIndex[i] = preIndexProd;
        preIndexProd = preIndexProd * nums[i];
    }
    // Get product of all postIndex. Loop starting from back
    for(let i = nums.length - 1; i >=0 ; i--) {
        prodAllMinusIndex[i] = prodAllMinusIndex[i] * postIndexProd;
        postIndexProd = postIndexProd * nums[i];
    }
    return prodAllMinusIndex;
};