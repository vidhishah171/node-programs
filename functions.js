function sayHello(name) {
    console.log("Hello", name);
    return "Hello"+name;
}

exports.sayHelloFn = sayHello;


function add(a,b) {
    console.log(a+b);
    return a+b;
}

function sub(a,b) {
    return a-b;
}

// module.exports = { sayHello, add, sub };
// module.exports = sub;

exports.addFn = add;
exports.subFn = sub;