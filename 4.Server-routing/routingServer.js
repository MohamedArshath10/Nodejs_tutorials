const http = require('http')

const port = "http://localhost:5000"

// Create server
const server = http.createServer((req, res) => {
    if(req.url == "/"){ // checks wheter the url has only / and route it to home page
        res.writeHead(200, {"content-type": "text-plain"})
        res.end("Home Page")
    }
    else if(req.url == "/about"){ // checks wheter the url has only /about and route it to about page
        res.writeHead(200, {"content-type": "text-plain"})
        res.end("About Page")
    }
    else{
        res.writeHead(404, {"content-type": "plain-text"}) // other routes will be considered as 404
        res.end("404 page not found") 
    }
})

// To make the server run on port "http://localhost:5000"
server.listen(5000, () => {
    console.log("Server running", port);
})