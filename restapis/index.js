const express = require("express")
const users = require("./MOCK_DATA.json")
const fs = require("fs")
const mongoose = require("mongoose")


const app = express()
const port = 8000;

// middleware
app.use(express.urlencoded({extended: false}))


mongoose.connect("mongodb://localhost:27017/practice")
.then(() => console.log("MongoDB connection Sucessful."))
.catch((err) => console.log("Error while connecting to MongoDB:", err))

const userSchema = new mongoose.Schema({
    firstName: {type: String, required : true},
    lastName: {type: String},
    email: {type: String, required: true, unique: true},
    jobTitle: {type: String},
    gender: {type: String}
},
{timestamps: true})

const userModel = mongoose.model("user",userSchema);


app.get("/users", async (req, res) => {
    const userList = await userModel.find({firstName: "Vidhi"});
    const html = `
    <ul>
    ${userList.map((user) => `<li>${user.firstName} ${user.lastName}: ${user.email}</li>`).join("")}
    </ul>`;
    res.send(html);
})


app.get("/api/users", async (req, res) => {
    const userList = await userModel.find({})
    res.json(userList);
})

app.get("/api/users/:id", (req,res) => {
    console.log(req.params.id);
    const id = req.params.id;
    const user = users.find((user) => user.id == id);
    console.log(user)
    return res.json(user);
})


app.route("/users/:id")
.get(async (req,res) => {
    return res.json(await userModel.findById(req.params.id))
})
.patch(async (req,res) => {
   const updatedUser = await userModel.findByIdAndUpdate(req.params.id, {firstName: req.query.first_name}, {new: true})
    // const result = await userModel.findById(req.params.id)
    return res.json(updatedUser);
})
.delete(async (req,res) => {
    const deleted = await userModel.findByIdAndDelete(req.params.id);
    return res.json(deleted)
})

app.post("/api/users", async (req,res) => {
    console.log(req.body);
    // const user = req.body;
    // user.id = users.length + 1
    // users.push(user)
    // fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
    //     res.json({...user, status: "Success"});
    // })
    // return res.json({status: "Pending", api: "Post"});
   const result = await userModel.create({
        firstName: req.body.first_name,
        lastName: req.body.last_name,
        email: req.body.email,
        jobTitle: req.body.job_title,
        gender: req.body.gender
    })
    return res.json(result);
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