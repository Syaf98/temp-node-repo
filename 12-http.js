const http = require('http');

const server = http.createServer((req, res)=>{
if(req.url === '/'){
    res.end('Welcome to our home page')
    return
}

if(req.url === '/about'){
    res.end('Here is our short history')
    return
}
res.end('<h1>Page does not exist</h1>')

})

server.listen(5000)