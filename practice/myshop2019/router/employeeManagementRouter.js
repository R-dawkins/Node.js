import express from 'express';
import * as ManagementController from '../controller/ManagementController.js'
import * as createController from '../controller/createController.js'
import * as removeController from '../controller/removeController.js'
const router = express.Router();
router.use(express.urlencoded({extended:true}))
router.use(express.json());
router.get('/1', ManagementController.getEmployee);
router.delete('/remove', removeController.remove);
export default router;
