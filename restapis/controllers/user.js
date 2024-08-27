const {userModel} = require("../models/user") 


async function handleGetUsers(req,res) {
    const userList = await userModel.find({firstName: "Vidhi"});
    const html = `
    <ul>
    ${userList.map((user) => `<li>${user.firstName} ${user.lastName}: ${user.email}</li>`).join("")}
    </ul>`;
    res.send(html);
}


const handleFindAllUsers =  async (req, res) => {
    const userList = await userModel.find({})
    res.json(userList);
}


const handleGetUserById = async (req,res) => {
    console.log(req.params.id);
    const id = req.params.id;
    const user = await userModel.findById(id);
    console.log(user)
    return res.json(user);
}

const handleUpdateUserById = async (req,res) => {
    const updatedUser = await userModel.findByIdAndUpdate(req.params.id, {firstName: req.query.first_name}, {new: true})
     // const result = await userModel.findById(req.params.id)
     return res.json(updatedUser);
 }

const handleDeleteUserById = async (req,res) => {
    const deleted = await userModel.findByIdAndDelete(req.params.id);
    return res.json(deleted)
}

const handleCreateUser =  async (req,res) => {
    console.log(req.body);
   const result = await userModel.create({
        firstName: req.body.first_name,
        lastName: req.body.last_name,
        email: req.body.email,
        jobTitle: req.body.job_title,
        gender: req.body.gender
    })
    return res.json(result);
}

module.exports = {
    handleGetUsers,
    handleFindAllUsers,
    handleGetUserById,
    handleUpdateUserById,
    handleDeleteUserById,
    handleCreateUser
}