import mongoose from "mongoose"

const UserSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String,
    },
    password: {
        required: true,
        type: String,
    },
})

const UserModel = new mongoose.model("user", UserSchema)

export default UserModel