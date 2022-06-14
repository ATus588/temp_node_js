// HTTP
//

const http = require(`http`);
const { rearg } = require("lodash");

// create server
// 2 parameter: request and response
const server = http.createServer((req, res) => {
  if (req.url === `/`) {
    res.end(`Welcome to our home page`);
  }
  if (req.url === `/about`) {
    res.end(`Here is our short history`);
  }
  res.end(`
  <h1>Oops!</h1>
  <p> We can't find the page </p>
  <a href="/">Back home</a>
  `);
});

// setup sever port
server.listen(5000);
