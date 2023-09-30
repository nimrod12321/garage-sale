import mongoose, { Schema } from "mongoose";

const ObjectId = mongoose.Schema.ObjectId;

const User = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
        
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})

const UserModel = mongoose.model("User", User);
export default UserModel;