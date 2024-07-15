import express from 'express'

import { getUsers, deleteUserById, getUserById } from '../db/users'

export const getAllUSers= async (req: express.Request, res: express.Response) => {
    try {
        const users = await getUsers();

        return res.status(200).json(users);        
    } catch (error) {
        console.log(error);
        return res.sendStatus(400)
        
    }
}

export const deleteUser = async (req: express.Request, res: express.Response) => {
    try {
        const { id } = req.params;

        const deleteUser = await deleteUserById(id);

        return res.json(deleteUser);

    } catch (error) {
        console.log(error);
        return res.sendStatus(400)
        
    }
}

export const UpdateUser = async (req: express.Request, res: express.Response) => {
    try {
        const { id } = req.params;

        console.log(id)

        const {username} = req.body;

        console.log(username);

        const user = await getUserById(id);

        console.log(user)

        user.username = username;

        await user.save();

        return res.status(200).json(user);
        
    } catch (error) {
        console.log(error);
        return res.sendStatus(400)
    }
}
