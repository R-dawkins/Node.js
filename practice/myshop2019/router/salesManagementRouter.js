import express from 'express';
import * as ManagementController from '../controller/ManagementController.js'
const router = express.Router();
router.use(express.urlencoded({extended:true}))
router.use(express.json());
router.get('/1', ManagementController.getSales)

router.get('/salesCustomer', ManagementController.getSalesCustomer)
router.get('/salesAge', ManagementController.getSalesAge)
router.get('/salesCategory', ManagementController.getSalesCategory)
router.get('/salesProduct', ManagementController.getSalesProduct)


export default router;