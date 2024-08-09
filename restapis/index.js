const express = require("express")
const users = require("./MOCK_DATA.json")
const fs = require("fs")

const app = express()
const port = 8000;

// middleware
app.use(express.urlencoded({extended: false}))

app.get("/users", (req, res) => {
    const html = `
    <ul>
    ${users.map((user) => `<li>${user.first_name} ${user.last_name}</li>`).join("")}
    </ul>`;
    res.send(html);
})


app.get("/api/users", (req, res) => {
    res.json(users);
})

app.get("/api/users/:id", (req,res) => {
    console.log(req.params.id);
    const id = req.params.id;
    const user = users.find((user) => user.id == id);
    console.log(user)
    return res.json(user);
})


// app.route("/users").post((req,res) => {
//     console.log("Post api");
//     return res.json({status: "Pending", api: "Post"});
// })
// .patch((req,res) => {
//     console.log("Patch api");
//     return res.json({status: "Pending", api: "Patch"});
// })
// .delete( (req,res) => {
//     console.log("Delete api");
//     return res.json({status: "Pending", api: "Delete"});
// })

app.post("/api/users", (req,res) => {
    console.log(req.body);
    const user = req.body;
    user.id = users.length + 1
    users.push(user)
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
        res.json({...user, status: "Success"});
    })
    // return res.json({status: "Pending", api: "Post"});

})


// app.patch("/api/users", (req,res) => {
//     console.log("Patch api");
//     return res.json({status: "Pending", api: "Patch"});
// })


// app.delete("/api/users", (req,res) => {
//     console.log("Delete api");
//     return res.json({status: "Pending", api: "Delete"});
// })


app.listen(port, () => {
    console.log(`Webserver started on Port: ${port}`)
})