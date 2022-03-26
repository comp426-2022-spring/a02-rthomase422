//import argv from 'yargs';
//console.log(argv.call)
import { flipACoin } from './modules/coin.mjs';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
var argv = require('yargs')(process.argv.slice(2))
    //.scriptName("guess-flips")
    .usage("node guess-flip --call=[heads|tails]")
    .alias('c', 'call')
    .choices('c', ['heads', 'tails'])
    .strict()
    .argv
;
const call = argv.call || process.env.CALL

console.log(flipACoin(call))