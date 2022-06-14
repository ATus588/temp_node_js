// npm:
// - node package manager
// - allows reuse code from other projects
// - share code with other developer
// install locally on a project     npm i <name>
// install to use in any project    npm install -g <name>

// package.json - stores important info about project
// npm init        (create package.json file)
// npm init -y     (everything default)
// can change value later in package.json file

const _ = require("lodash");

const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);
