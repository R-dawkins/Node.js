import express from 'express';
import * as ManagementController from '../controller/ManagementController.js'
const router = express.Router();
router.use(express.urlencoded({extended:true}))
router.use(express.json());
router.get('/1', ManagementController.getOrder)

/* 
  주문관리 페이지에서 보여줄 것
  주문 아이디, 주문 날짜, 주문 고객, 담당 직원, 상품명 혹은 상품 코드
  
*/
export default router;