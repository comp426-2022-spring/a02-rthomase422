//const args = require('yargs').argv;
//console.log(args.number);
//const number = args.number || 1
//if no number given, flip once by default
import Yargs from 'yargs';
const args = Yargs(process.argv.slice(2)).argv;
const number = args.number || process.env.NUMBER || 1
console.log(args.number)
import { coinFlips, countFlips } from './modules/coin.mjs';
console.log(coinFlips(number))
console.log(countFlips())
