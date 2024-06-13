import { Router } from 'express';
import {  addUser, searchUser } from '../controllers/user.controller.js';
const router = Router();

router.route('/add').post(
  addUser
);
router.route('/search').post(searchUser);


export default router;
