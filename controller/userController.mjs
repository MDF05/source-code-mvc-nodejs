import UserModel from "../model/userModel.mjs"

async function getAllUser(req, res) {
    try {
        const allUser = await UserModel.find()

        res.json({ succes: true, allUser })
    } catch (err) {
        res.json({ error: err.message })
    }
}

async function saveUser(req, res) {
    try {
        const { name, password } = req.body

        const newUser = UserModel({
            name,
            password,
        })

        await newUser.save()

        res.json({ succes: true, message: "berhasil menambahkan user baru" })
    } catch (err) {
        res.json({ error: err.message })
    }
}

async function viewUser(req, res) {
    try {
        const allUser = await UserModel.find()

        res.render("allUserView.ejs", { allUser })
    } catch (err) {
        res.json({ error: err.message })
    }
}
async function viewUserById(req, res) {
    try {
        res.render("userById.ejs")
    } catch (err) {
        res.json({ error: err.message })
    }
}

export { saveUser, getAllUser, viewUser, viewUserById }