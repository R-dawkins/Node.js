import express from 'express';
import * as updateController from '../controller/updateController.js'
const router = express.Router();
router.use(express.urlencoded({extended:true}))
router.use(express.json());
router.post('/employeeManagement/:eid', updateController.updateEmployee);

export default router;