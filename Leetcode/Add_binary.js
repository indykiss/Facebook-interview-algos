
/* Add Binary
Given two binary strings, return their sum (also a binary string).

The input strings are both non-empty and contains only characters 1 or 0.

Example 1:

Input: a = "11", b = "1"
Output: "100"
*/

// Good but really need to remember these bigInt libs
var addBinary = function(a, b) {
    let sum = 0

    // Convert binary to numbers
    let binaryA = BigInt("0b" + a);
    let binaryB = BigInt("0b" + b);
    
    // Add them together 
    sum = binaryA + binaryB; 
    
    // Convert back to binary
        // .toString(base of 2)
    return sum.toString(2);
}
