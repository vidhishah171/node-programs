const fs = require("fs");


// console.log(fs)
// synchronized
// fs.writeFileSync("test.txt", "This is test.");
// console.log(fs.readFileSync("./test.txt", "utf-8"));

// fs.appendFileSync("./test.txt",new Date().toLocaleTimeString())

console.log("1")

// blocking operation
// const result = fs.readFile("test.txt","utf-8",)
// console.log(result)


// non-blocking
fs.readFile("test.txt","utf-8", (error, result) => { 
    if(error) {
    console.log(error)
    } else {
        console.log("Result", result);
    }
});

console.log("2")


// fs.readFile("test.txt","utf-8", (error, result) => { 
//     if(error) {
//     console.log(error)
//     } else {
//         console.log("Result", result);
//     }
// });


// console.log(fs.readdirSync("./"))

// fs.copyFileSync("./test.txt", "./copy.txt")

// console.log(fs.statSync("./test.txt"))