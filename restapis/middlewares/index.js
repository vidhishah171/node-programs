const fs = require("fs")

function logRequest() {
    return (req,res,next) => {
        console.log("Request arrived for: ",req.baseUrl, "and method: ", req.method);
        const message = `Request Received: ${req.method} : ${req.url} at ${new Date().toLocaleDateString()}.`;
        fs.appendFile("./log.js", message, (err,data) => {
            if(err) {
                console.log(err);
                return res.json({error: err});
            } else {
                next();
            }
        })
    }
}

module.exports = {logRequest}