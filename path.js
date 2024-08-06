const path = require("path");

var pathObj = path.parse("./file.js")
console.log(pathObj)

const os = require("os");

console.log(os.hostname())
console.log(os.freemem())
console.log(os.totalmem())
console.log(os.machine())
console.log("CPU:", os.cpus().length)