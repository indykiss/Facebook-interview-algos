/*
Merge intervals

Given a collection of intervals, merge all overlapping intervals.

Input: [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
*/


// 2nd try. Easier to get part of the way there, but needed to see the solution. Also not passing an edge case? 
var merge = function(intervals) {
    
    if(intervals.length < 2) {return intervals}
    
    intervals = intervals.sort((a,b) => a[0] - b[0]);
    
    for(var i = 1; i < intervals.length; i++) {
        let firstArr = intervals[i - 1];
        let secondArr = intervals[i];
        
        if(secondArr[0] <= firstArr[1]) {
            intervals[i] = [Math.min(firstArr[0], secondArr[0]), Math.max(firstArr[1], secondArr[1])]
            intervals.splice(i - 1, i);
            i = i -1;
        }
    }
    return intervals;
}




/*
Attempt # 1:

Input: [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].

LOTS OF EDGE CASES. Elements aren't sorted. Merging sometimes means 
an interval gets eaten. Intervals can only be 1. Etc. 

This is the iCal "when are people open" algo.
Except that used hashes instead of arrs. 

Can't assume that all arrays are already sorted. 
Can assume always 2 eles in an interval. 

Strat: Compare 1st arr and 2nd arr intervals[0] & [1]
    if intervals[1][0] is < intervals[0][1] then merge 
    merge being pushing into new arr an arr of int[0][0] and int[1,1]
    if not, leave array alone 

Input: [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]

Lesson learned: I was REALLY close, but I was hardcoding the 
"if this element is less, it goes here but if the other one is less, it goes here"
When I JUST NEEDED TO DO MATH.MIN AND MATH.MAX I need to remember they exist. So useful. 
BUT got everything else right! The strategy was good! 
But the if/else if/else was too much. Lots of edge cases there. 
*/ 

var merge = function(intervals) {
    // Edge case: It's like 1 arr
    if(intervals.length < 2) {
        return intervals;
    }
    // S1: Sort it to make comparison easier
    intervals = intervals.sort((a,b) => a[0] - b[0])
    
    // S2: Loop though intervals and ID the eles needed 
    for(var i = 1; i < intervals.length; i++) {
        let previousArr = intervals[i-1]
        let currentArr = intervals[i]
        
        // S3: If floor of currentArr is in previous arr, push merged arr in result
        if(currentArr[0] <= previousArr[1]) {
          intervals[i] = [Math.min(previousArr[0],currentArr[0]), Math.max(previousArr[1],currentArr[1])] 
          intervals.splice(i-1, 1)            
          i = i - 1;  // After merge, the arr becomes shorter
        }
    }
    // S4: Return that baby
    return intervals;
};