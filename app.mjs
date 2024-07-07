import "./model/connection.mjs"
import express from "express"
import userRoute from "./route/userRuoter.mjs"
import { resolve } from "path"

const app = express()
const port = process.env.port || 3000

app.use(express.json())
app.use(express.urlencoded())
app.set("view engine", "ejs")
app.set("views", resolve("./src/view/"))

app.use("/user", userRoute)

app.listen(port, () => console.log(`listenin on http://localhost:${port}`))