import express from 'express';

import * as memberController from '../controller/memberController.js'
const router = express.Router();

router.use(express.urlencoded({extended:true}));
router.use(express.json());

router.get('/', memberController.getloginPage)
router.post('/signup', memberController.signUp)
router.post('/login', memberController.login)

export default router;