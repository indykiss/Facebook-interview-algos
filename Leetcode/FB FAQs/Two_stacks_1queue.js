/*
Implement a queue with 2 stacks. Your queue should 
have an enqueue and a dequeue method and it should be 
"first in first out" (FIFO).

Optimize for the time cost of m calls on your queue. 
These can be any mix of enqueue and dequeue calls.

Assume you already have a stack implementation and 
it gives O(1) time push and pop.

Strat: Push all the items into inStack, then out of inStack
and into outStack so we can have outStack in FIFO order.
To make this process as efficient as possible, we only
move elements in/out of stacks as we enqueue and dequeue.

*/







// Interview cake: 
class QueueTwoStacks {
    constructor() {
      this.inStack = [];
      this.outStack = [];
    }
    
    // We push item into inStack for enqueue
    enqueue(item) {
      this.inStack.push(item);
    }
  
    dequeue() {
      // If outStack is empty, we have to move 
        // over everying in inStack  
      if(this.outStack.length === 0) {
       // Move eles from inStack to outStack, reversing order
       while(this.inStack.length > 0) {
         const element = this.inStack.pop();
         this.outStack.push(element);
       }
      } 
      // Edge: If outStack's empty still, for some reason
      if(this.outStack.length === 0) {
        throw new Error("Queue is empty.")
      }
      // If outStack is full, we just need to 
      // return the top item
      return this.outStack.pop();
    }
    
  }
  
  // Stack implementation (bc let's not assume we haz it)
    // This is for practice. Commented out bc messing with tests
  // class Stack{
  //   constructor() { this.items = [] }
  //   push(item) { this.items.push(item) }
  //   pop() { return this.items.pop() }
  // }