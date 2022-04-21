//import argv from 'yargs';
//console.log(argv.call)
import { flipACoin } from './modules/coin.mjs';
import minimist from 'minimist';
var args = minimist(process.argv.slice(2));
let call = args['call']
if (call == "heads" || call == "tails") {
    console.log(flipACoin(call))
} else {
    console.log("Error: no inputs\nUsage: node guess-flip --call=[heads|tails]")
} 


