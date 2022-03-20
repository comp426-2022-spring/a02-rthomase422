/** Coin flip functions 
 * This module will emulate a coin flip given various conditions as parameters as defined below
 */

/** Simple coin flip
 * 
 * Write a function that accepts no parameters but returns either heads or tails at random.
 * 
 * @param {*}
 * @returns {string} 
 * 
 * example: coinFlip()
 * returns: heads
 * 
 */

export function coinFlip() {
  return Math.random() > .5 ? ("heads") : ("tails")
}

/** Multiple coin flips
 * 
 * Write a function that accepts one parameter (number of flips) and returns an array of 
 * resulting "heads" or "tails".
 * 
 * @param {number} flips 
 * @returns {string[]} results
 * 
 * example: coinFlips(10)
 * returns:
 *  [
      'heads', 'heads',
      'heads', 'tails',
      'heads', 'tails',
      'tails', 'heads',
      'tails', 'heads'
    ]
 */

export function coinFlips(flips) {
  var array = new Array();
  for (var i = 0; i < flips; i++) {
    var coin = Math.random > .5 ? ("heads") : ("tails");
    array.push(coin);
  }
  return array;
}

/** Count multiple flips
 * 
 * Write a function that accepts an array consisting of "heads" or "tails" 
 * (e.g. the results of your `coinFlips()` function) and counts each, returning 
 * an object containing the number of each.
 * 
 * example: conutFlips(['heads', 'heads','heads', 'tails','heads', 'tails','tails', 'heads','tails', 'heads'])
 * { tails: 5, heads: 5 }
 * 
 * @param {string[]} array 
 * @returns {{ heads: number, tails: number }}
 */

export function countFlips(array) {
  var count = {};
  for (var flip = 0; flip < array.length; flip++ ) {
    if (!count.hasOwnProperty(array[flip])) {
      count[array[flip]] = 1;
    } else {
      count[array[flip]]++;
    }
  }
  return {'tails': count, 'heads': count}
  //or console.log(count)
}

/** Flip a coin!
 * 
 * Write a function that accepts one input parameter: a string either "heads" or "tails", flips a coin, and then records "win" or "lose". 
 * 
 * @param {string} call 
 * @returns {object} with keys that are the input param (heads or tails), a flip (heads or tails), and the result (win or lose). See below example.
 * 
 * example: flipACoin('tails')
 * returns: { call: 'tails', flip: 'heads', result: 'lose' }
 */

export function flipACoin(call) {
  var flip = Math.random() > .5 ? ("heads") : ("tails")
  var result = '';
  if (flip == call) {
    result = 'win';
  } else {
    result = 'lose';
  }
  return {'call': call, 'flip': flip, 'result': result}
}




/** Export 
 * 
 * Export all of your named functions
*/
