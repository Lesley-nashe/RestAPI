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

export const getUsers = () => UserModal.find();

export const getUsersByEmail = (email: String) => UserModal.findOne({ email });

export const getUsersBySessionToken = (sessionToken: String) => UserModal.findOne({
    'authentication.sessionToken' : sessionToken,
})

export const getUserById  = (Id: String) => UserModal.findOne(Id);
export const creatUser = (values: Record<string, any>) => new UserModal(values).save().then((
    user) => user.toObject());

export const deleteUser = (Id: String) => UserModal.findByIdAndDelete({ _Id: Id});

export const updateUser = (Id: String, values: Record<string, any> ) => UserModal.findByIdAndUpdate({Id, values});