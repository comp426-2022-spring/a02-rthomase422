//const args = require('yargs').argv;
//console.log(args.number);
//const number = args.number || 1
//if no number given, flip once by default
import { coinFlips, countFlips } from './modules/coin.mjs';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
var args = require('yargs')(process.argv.slice(2));
args['number']
const number = args.number;
if (number == null) {
    var flip = coinFlips(1);
    console.log(flip);

    if (flip == ['heads']) {
        console.log('{ heads: 1 }');
    }
    else { 
        console.log('{ tails: 1 }');
    }
} else {
    
    let flip = coinFlips(number);
    console.log(flip);
    console.log(countFlips(flip))

}
