// GLOBALS - NO WINDOWS
// __dirname    - path to current directory
// __filename   - file name
// require      - function to use modules (CommonJS)
// module       - infor about current module (file)
// process      - infor about env where the program is being executed

console.log(__dirname);
console.log(__filename);
setInterval(()=>{
    console.log('Hello world');
},2000)