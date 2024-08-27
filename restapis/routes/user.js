const express = require("express")
const { handleGetUsers, handleGetUserById, handleFindAllUsers, handleUpdateUserById, handleDeleteUserById, handleCreateUser } = require("../controllers/user")


const router = express.Router()

router.get("/html", handleGetUsers)

router.route("/")
.get(handleFindAllUsers)
.post(handleCreateUser)

router.route("/:id")
.get(handleGetUserById)
.patch(handleUpdateUserById)
.delete(handleDeleteUserById)


module.exports = {router};