// Modules

// split code into modules
// modules are encapsulated code (only share minimum)
// in CommonJs, every file is module (by default)
// export modules:
//  - export is an object
//  - export comes with key:value
//  - can export multiple const or fuction or object
// find out about built-in modules in nodeJs home page

// acess other modules (note that this can only acess things exported from other modules)
const names = require(`./4_names`);
const sayHi = require(`./5_utils`);
const data = require(`./6_exports_syntax`);
// require without assign to a variable -> the fuction run immediately
// when import a module -> invoke it -> invoked fuction in the module will execute
require(`./7_require`);
// console.log(names);
// console.log(data);

sayHi(`Susan`);
sayHi(names.tat);
sayHi(names.dtkl);
