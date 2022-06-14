// GLOBALS - NO WINDOW !!! because no browser
// globals variable: can access to these variable from anywhere in the code

// __dirname    - path to current directory
// __filename   - file name
// require      - fuction to use modules (CommonJs)
// module       - info about current module (file)
// process      - info about env wherethe program is being executed

console.log(__dirname);
setInterval(() => {
  console.log("hello world");
}, 1000); // event loop here
console.log(__dirname);
