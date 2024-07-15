import express from 'express'

import { deleteUser, getAllUSers } from '../controllers/users'
import { isAuthenticated, isOwner } from '../middleware';


export default (router: express.Router) => {
    router.get('/users', isAuthenticated, getAllUSers);
    router.delete('/users/:id', isAuthenticated, isOwner, deleteUser);
};