import express from 'express';

import { login, createuser } from '../controllers/user.js';

const router = express.Router();
// http://localhost:5000/api/v1/auth

router.route('/register').post(createuser);
router.route('/login').post(login);

export default router;
