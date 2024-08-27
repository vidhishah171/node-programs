const mongoose = require("mongoose")


// mongoose.connect("mongodb://localhost:27017/practice")
// .then(() => console.log("MongoDB connection Sucessful."))
// .catch((err) => console.log("Error while connecting to MongoDB:", err))


async function connectMongoDb(url) {
    return mongoose.connect(url);
}

module.exports = {connectMongoDb}