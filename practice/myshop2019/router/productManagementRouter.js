import express from 'express';
import * as ManagementController from './controller/ManagementController.js'
const router = express.Router();
router.use(express.urlencoded({extended:true}))
router.use(express.json());
router.get('/:page', ManagementController.getProduct)

export default router;