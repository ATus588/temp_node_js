// module about
const path = require("path");

// return current platform specific seperator
console.log(path.sep);

// use to join file path ???
const filePath = path.join(`/content`, `subfolder`, `test.txt`);
console.log(filePath);

// return base
const base = path.basename(filePath);
console.log(base);

// return absolute path
// don't have to be available path ???
const absPath = path.resolve(__dirname, `content`, `test.txt`, `subfolder`);
console.log(absPath);
