//import argv from 'yargs';
//console.log(argv.call)
import { flipACoin } from './modules/coin.mjs';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const args = require('yargs')(process.argv.slice(2));
args['call']
const call = args.call || process.env.CALL
if (call == null) {
    console.log("Error: no input.")
    console.log("Usage: node guess-flip --call=[heads|tails]")
} else if (call != "heads" && call != "tails") {
    console.log("Error: not a valid input (heads or tails).")
    console.log("Usage: node guess-flip --call=[heads|tails]")
} else {
    console.log(flipACoin(call))
}

