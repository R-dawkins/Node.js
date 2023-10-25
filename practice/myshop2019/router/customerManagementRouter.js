import express, { json, urlencoded } from 'express';
import * as ManagementController from './controller/ManagementController.js'
const router = express.Router();
router.use(express.urlencoded({extended:true}))
router.use(express.json());

router.get('/', ManagementController.getCustomer);
router.get('/:page', ManagementController.getCustomerPage);

// router.get('/:page', (req, res, next) => {
//   res.json(list.bestSellerList);
// });

export default router;