

/*
Given a non-empty binary tree, return the average value of the nodes on each level in the form of an array.

Input:
      3
   /   \
  9    20
  /    /  \
 11      15   7
Output: [3, 14.5, 11]

BFS: queue to track 
Temp queue for the next level
*/



// Nice way to see BFS. Grok. Oct, fb/bloomb
var averageOfLevels = function(root) {
    if(!root) return [];

    let res = [],
        queue = [];
    
    queue.push(root);
    
    while(queue.length > 0) {
        
        let lvl = [],
            len = queue.length;
        
        for(let i = 0; i < len; i++) {
            let curr = queue.shift();
            
            lvl.push(curr.val);
            
            if(curr.left) queue.push(curr.left);
            if(curr.right) queue.push(curr.right);
        }
        // find the average in each level then push into res
        let sum = 0;
        for(let j = 0; j < lvl.length; j++) {
            sum += lvl[j];
        }
        let avg = sum/lvl.length; 
        
        res.push([avg]);
    }
    return res;
};



var averageOfLevels = function(root) {
    let queue = [];
    let res = [];
    let nextLvlQueue = []
    let sum = 0; 
    let countOfNums = 0;
    queue.push(root);
    
    while(queue.length > 0 || nextLvlQueue > 0) {
        let node = queue.shift();
        
        sum += node.val;
        countOfNums++;
        
        if(node.left != null) {
            nextLvlQueue.push(node.left)
        }
        
        if(node.right != null) {
            nextLvlQueue.push(node.right)
        }
        
        if(queue.length == 0) {
            res.push(sum / countOfNums);
            sum = 0; 
            countOfNums = 0; 
            queue = nextLvlQueue;
            nextLvlQueue = [];
        }
    }
    return res;
}
