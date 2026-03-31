const http = require('http')

const port = "http://localhost:5000"

// Create server
const server = http.createServer((req, res) => {
    res.writeHead(200, {"content-type": "application/json"})  // sends the head to the browser
    res.end( {"name": "Mohamed Arshath"} ) // sends the data to the browser
})

// To make the server run on port "http://localhost:5000"
server.listen(5000, () => {
    console.log("Server running", port);
})
