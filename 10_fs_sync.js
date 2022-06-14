// Differences between sync and async
// - sync: follow strict order
// - async: put callback function to an offload to start the next part of the code
//          async is messy -> use promise and async await
// Event loop:

const { readFileSync, writeFileSync } = require(`fs`);

console.log(`start`);
const first = readFileSync(`./content/first.txt`, `utf8`);
const second = readFileSync(`./content/second.txt`, `utf8`);

//console.log(first, second);

// by default: no file -> node create, already file -> node overwrite
// to make it read only -> add object {flag: 'a'} into writeFileSync as parameter
writeFileSync(
  "./content/result-sync.txt",
  `Here is the result ${first}, ${second}`,
  { flag: `a` }
);
console.log(`Done this task`);
console.log(`Start next task`);
