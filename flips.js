//const args = require('yargs').argv;
//console.log(args.number);
//const number = args.number || 1
//if no number given, flip once by default
import { coinFlips, countFlips } from './modules/coin.mjs';
import minimist from 'minimist';
var args = minimist(process.argv.slice(2));
//args['number']
    
let flip = coinFlips(args.number);
console.log(flip, countFlips(flip))

