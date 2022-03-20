const args = require('yargs').argv;
console.log(args.number);
const number = args.number || 1
//if no number given, flip once by default
import { coinFlips, countFlips } from './modules/coin.mjs';
console.log(coinFlips(number))
console.log(countFlips())
