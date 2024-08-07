const http = require("http");
// const fs = require("fs");
const url = require("url");
const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.end("Home Page Get Method");
})

app.post("/", (req, res) => {
    res.end("Home Page Post Method");
})

app.get("/about", (req, res) => {
    res.end("About Page Get Method");
})

// function myHandler(req, res) {
//     if(req.url === "/favicon.ico") {
//         return res.end();
//     }
//     console.log(req.url)
//     const myUrl = url.parse(req.url, true)
//     console.log(myUrl)

//     fs.appendFile("log.txt", `${new Date().toLocaleTimeString()}: ${req.method} ${req.url} Request Received.\n`, (err, data) => {
//         switch(myUrl.pathname) {
//             case "/":
//                 if(req.method === "GET") {
//                 res.end("Home Page Get Method");
//                 //database query to fetch
//                 } else if(req.method === "POST") {
//                 res.end("Home Page");
//                 // databse query to add data, create data
//                 }
//                 break;
//             case "/about":
//                 console.log("name: ",myUrl.query.name, " id:", myUrl.query.id)
//                 res.end("About Page");
//                 break;
//             case "/contact":
//                 res.end("Contact Us")
//                 break;
//             default:
//                 res.end("404 Not found");
//         }
//     })
    // console.log(req.url)
    // console.log("Request received.")

    // res.end("Hello There Again.")

// }

const myServer = http.createServer(app);


function initialize() {
    console.log("Webserver started here.");
}

myServer.listen(8000, initialize)