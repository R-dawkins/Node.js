import express from 'express'
import * as loginController from '../controller/loginController.js'
const router = express.Router();
router.use(express.urlencoded({extended:true}));
router.use(express.json())

// POST: /login
router.post('/', loginController.login)

export default router;