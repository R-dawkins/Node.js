import express from 'express'
import * as signupController from '../controller/signupController.js'
const router = express.Router();
router.use(express.urlencoded({extended:true}));
router.use(express.json())

// POST: /login
router.post('/', signupController.signUp)

export default router;