import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema({
    username: {type: String, required: true},
    email: {type: String, required: true},
    authentication: {
        password: {type: String, required: true, select: false},
        salt: {type: String, select: false},
        sessionToken: {type: String, select: false},
    },
})

export const UserModal  = mongoose.model('User', UserSchema);