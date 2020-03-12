/*
Minimum swaps 2
You are given an unordered array consisting of consecutive integers  [1, 2, 3, ..., n] 
without any duplicates. You are allowed to swap any two elements. You need to find the minimum 
number of swaps required to sort the array in ascending order.

For example, given the array  we perform the following steps:

i   arr                         swap (indices)
0   [7, 1, 3, 2, 4, 5, 6]   swap (0,3)
1   [2, 1, 3, 7, 4, 5, 6]   swap (0,1)
2   [1, 2, 3, 7, 4, 5, 6]   swap (3,4)
3   [1, 2, 3, 4, 7, 5, 6]   swap (4,5)
4   [1, 2, 3, 4, 5, 7, 6]   swap (5,6)
5   [1, 2, 3, 4, 5, 6, 7]

It took 5 swaps to sort the array.


*/

function minimumSwaps(q) {
    let swaps = 0;
    const hash = {}
    
    for(let i = 0; i < q.length; i++) {
        hash[q[i]] = i;
    }

    for(let i = 0; i < q.length; i++) {
        let expNum = i + 1; 
        let curNum = q[i];
        if(curNum !== expNum) {
            let move = hash[expNum];
            q[i] = expNum;
            hash[expNum] = i;
            q[move] = curNum;
            hash[curNum] = move;
            swaps++;
        }
    }
    return swaps;
}
