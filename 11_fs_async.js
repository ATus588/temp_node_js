const { readFile, writeFile } = require("fs");
// callback: run a callback when done

console.log(`start`);
readFile(`./content/first.txt`, `utf8`, (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;
  readFile(`./content/second.txt`, `utf8`, (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    // same syntax as sync
    writeFile(
      "./content/result-async.txt",
      `Here is the result: ${first}, ${second}`,
      { flag: `a` },
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log(result);
        console.log("Done this task");
      }
    );
  });
});
console.log(`Starting next task`);
