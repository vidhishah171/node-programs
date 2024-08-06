const http = require("http");
const fs = require("fs");

const myServer = http.createServer((req, res) => {
    
    fs.appendFile("log.txt", `${new Date().toLocaleTimeString()}: ${req.url} Request Received.\n`, (err, data) => {
        console.log()
    })
    // console.log(req.url)
    // console.log("Request received.")
    switch(req.url) {
        case "/":
            res.end("Home Page");
            break;
        case "/about":
            res.end("About Page");
            break;
        case "/contact":
            res.end("Contact Us")
            break;
        default:
            res.end("404 Not found");
    }
    // res.end("Hello There Again.")
});

myServer.listen(8000)