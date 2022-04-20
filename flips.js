//const args = require('yargs').argv;
//console.log(args.number);
//const number = args.number || 1
//if no number given, flip once by default
import { coinFlips, countFlips } from './modules/coin.mjs';

import Yargs from 'yargs';
const args = Yargs(process.argv.slice(2)).argv;
const number = args.number || process.env.NUMBER || 1
if (number == null) {
    var flip = console.log(coinFlips(1));
    console.log(flip);

    if (flip == ['heads']) {
        console.log('{ heads: 1 }');
    }
    if (flip == ['tails']) {
        console.log('{ tails: 1 }');
    }
} else {
    
    let coins = console.log(args.number);
    console.log(JSON.stringify(coins));
    console.log(countFlips(coins))

}
