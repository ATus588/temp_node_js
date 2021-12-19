const http = require('http')

const server = http.createServer((req,res)=>{
    if (req.url === '/'){
        res.end('Welcome to our home page');
        return
    }
    if (req.url === '/about') {
        res.end('Here is our short history');
        return
    }
    else {
        res.end(`
        <h1>Opps</h1>
        <p>We can't find the page you are looking for</p>
        <a href="/">Back home</a>
    `)}
    return

});

server.listen(3000)