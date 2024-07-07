import express from "express"
import { getAllUser, saveUser, viewUser, viewUserById } from "../controller/userController.mjs"

const Router = express.Router()

Router.get("/", getAllUser)
Router.get("/view/all", viewUser)
Router.get("/view/byid", viewUserById)
Router.post("/new", saveUser)

export default Router