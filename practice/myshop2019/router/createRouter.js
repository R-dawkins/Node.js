import express from 'express';
import * as createController from '../controller/createController.js'
const router = express.Router();
router.use(express.urlencoded({extended:true}))
router.use(express.json());

router.post('/employeeReg',createController.postEmployee)

export default router;