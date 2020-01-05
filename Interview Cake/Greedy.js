// Greedy algorithm: builds up a solution by choosing the option that 
// looks the best at every step.
// Say you're a cashier and need to give someone 67 cents (US) using as 
// few coins as possible. 


// How much money could I have made yesterday trading Apple stocks? 
// Write an efficient function that takes stockPrices and returns 
// the best profit I could have made from one purchase and 
// one sale of one share of Apple stock yesterday.


function getMaxProfit(stockPrices) {

    // Calculate the max profit
    // Greedy algo: constantly compare the prev 2 ways 
    // update minPrice and maxProfit to initialize them as first price
    // and first possible profit 
    let maxProfit = stockPrices[1] - stockPrices[0];
    let minPrice = stockPrices[0];
    
    // Edge case
    if(stockPrices.length < 2) {
      return "We need at least 2 stock prices for a profit"
    }
    
    // Start at 2nd index to circumvent the issue of return 0 when 
    // maxProfit is negative. We can't sell at 0, so we'll start at 1
    for(let i = 1; i< stockPrices.length; i++) {
      const currentPrice = stockPrices[i];
      
      // What would be profit if we bought at min and sold at current? 
      const potentialProfit = currentPrice - minPrice
      
      // Update the maxProfit
      maxProfit = Math.max(maxProfit, potentialProfit);
      
      // Update minPrice so it's always the lowest we've seen 
      minPrice = Math.min(minPrice, currentPrice); 
    }
    return maxProfit; 
    // Edge case of no profit all day and input errors (no price)?
  }
  
  
  getMaxProfit([10, 7, 5, 8, 11, 9]);



// You created a game.

// Each round, players receive a score between 0 and 100, which you 
// use to rank them from highest to lowest.

// Each player gets a score between 0-100 and gets ranked. 
// I need to make a quicker sorting algo for player rankings. 
// At the moment, the time efficiency is O(n * ln (n)) which is too slow. 

// Write a function that takes:
// an array of unsortedScores and the highestPossibleScore in the game
// and returns a sorted array of scores in less than O(n * ln (n)) time.

// const unsortedScores = [37, 89, 41, 65, 91, 53];
// const HIGHEST_POSSIBLE_SCORE = 100;
// sortScores(unsortedScores, HIGHEST_POSSIBLE_SCORE);
// returns [91, 89, 65, 53, 41, 37]

// So now we want to get an O(n) solution instead. 





