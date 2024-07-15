import express from 'express'

import { deleteUser, getAllUSers, UpdateUser } from '../controllers/users'
import { isAuthenticated, isOwner } from '../middleware';


export default (router: express.Router) => {
    router.get('/users', isAuthenticated, getAllUSers);
    router.delete('/users/:id', isAuthenticated, isOwner, deleteUser);
    router.patch('/users/:id', isAuthenticated, isOwner, UpdateUser);
};