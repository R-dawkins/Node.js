import express from 'express';
import * as ManagementController from './controller/ManagementController.js'
const router = express.Router();
router.use(express.urlencoded({extended:true}))
router.use(express.json());
router.get('/:page', (req, res, next) => {
  res.json(list.hotPriceBestSellerList);
});

export default router;