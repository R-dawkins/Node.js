import express from 'express';
import * as ManagementController from '../controller/ManagementController.js'
import * as removeController from '../controller/removeController.js'
const router = express.Router();
router.use(express.urlencoded({extended:true}))
router.use(express.json());
router.get('/1', ManagementController.getProduct)
router.delete('/product/remove', removeController.removeProduct);

export default router;