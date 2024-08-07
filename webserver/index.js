const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.end("Home Page Get Method");
})

app.post("/", (req, res) => {
    res.end("Home Page Post Method");
})

app.get("/about", (req, res) => {
    console.log(`About Page Get Method Id:  ${req.query.id}, and name:  ${req.query.name}`)
    res.end(`About Page Get Method Id:  ${req.query.id}, and name:  ${req.query.name}`);
    //database 
})

app.listen(8000, () =>  console.log("Webserver started here with express."))