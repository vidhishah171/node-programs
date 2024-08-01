const {sayHelloFn, addFn, subFn} = require("./functions.js");  //{ sayHello, add };  
// const fs = require("os"); 
// built in modules, external library, files

// Few Important modules of node

// 1. FileSystem
// 2. HTTP: with this, we can create http server that listen for http requests
// 3. OS: To work with operating system.
// 4. Path: Gives bunch of utility system for working with paths
// 5. Process: Gives us info about the current process
// 6. Query Strings: Very useful for building http services
// 7. Stream: Which allows us to work with streams of data

// book = {
//     firstname: "Vidhi",
//     lastName: "Shah",
//     add: (a,b) =>  a+b
// }

// console.log("Function result: ",book.add(4,5))

// console.log("Hello World!");

// function sayHello(name) {
//     console.log("Hello", name);
//     return "Hello"+name;
// }

console.log(subFn(5,3))
// console.log(functionFile.sayHello("Vidhi"))
// console.log("Add: ", functionFile.add(2,3))

// sayHello("Vidhi")

// var inlineFn = function sayHello(name) {
//     // console.log("Hello", name);
//     return "Hello "+name;
// }

// console.log(inlineFn("janki"))

// var arrowFn = (name) => "Hello "+name;

// console.log(arrowFn("Abhisha"))