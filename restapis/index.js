const express = require("express")
const {connectMongoDb} = require("./connection.js")
const {logRequest} = require("./middlewares")
const {router} = require("./routes/user.js")

const app = express()
const port = 8000;

// DB Connection
connectMongoDb("mongodb://localhost:27017/practice")
.then(() => console.log("MongoDB connection Sucessful."))
.catch((err) => console.log("Error while connecting to MongoDB:", err))

// Middlewares
app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(logRequest())

// Routers
app.use("/users",router);


app.listen(port, () => {
    console.log(`Webserver started on Port: ${port}`)
})