/*
Valid Parentheses

Given a string containing just the characters '(', ')', '{', '}', '[' and ']', 
determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Note that an empty string is also considered valid.

Input: "()" => true

Input: "(]" => false

Strat:
- Make a hash that defines corresponding openers/closers
- Make a stack that tracks the openers 
- Loop through the str. If is an opener/ hash.hasOwnProperty(opener), push into stack 
    - Else. It's a closer. Great. 
    - Pop off the last opener from the stack. Check if its the correct corresponding. 
        - Hash[key/popped opener] !== currentValue, then return false 
- Ideally, our stack's length is at 0 since we've been popping off from the stack 
    - If we've only had openers, stack > 0
    - Return true if stack === 0
    
*/

var isValid = function(s) {
    const opClose = {
        "(" : ")", 
        "{" : "}",
        "[" : "]"
    }
    let stack = [];
    // Edge: Empty str = valid
    if(s === "") {return true;}
    
    for(let i = 0; i < s.length; i++) {
        if(opClose.hasOwnProperty(s[i])) {
            stack.push(s[i]);
        }
        else if(opClose[stack.pop()] !== s[i]) {
            return false
        }
    }
    return stack.length === 0;  
};
