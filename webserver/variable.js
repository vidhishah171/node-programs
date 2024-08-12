const express = require("express")

const app = express()

// Path Parameters: localhost:8000/users/vidhi/abhisha
// To get the path parameters inside the function, we need to use req.params.parameter name
app.get("/users/:author/:publisher", (req,res) => {
    console.log("Hello from the get api");
    console.log(`Author: ${req.params.author}, Publisher: ${req.params.publisher}`)
    res.json({message: "GET API"})
})


// Query Parameters: localhost:8000/users?author=vidhi&publisher=abhisha
// To get the query parameters inside the function, we need to use req.query.parameter name
app.get("/users", (req,res) => {
    console.log("Hello from the get Query api");
    console.log(`Author: ${req.query.author}, Publisher: ${req.query.publisher}`)
    res.json({message: "GET Query API"})
})

app.listen(8000, () => { console.log("Hello There.") })