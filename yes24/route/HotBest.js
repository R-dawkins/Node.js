import express from 'express';
import { listArray } from './data.js';
const router = express.Router();
router.use(express.urlencoded({extended:true}));
router.use(express.json());

router.get('/:page',(req, res, next) => {
  const page = req.params.page
  const HotPriceBestSeller = listArray.filter((list)=>list.title === '국내도서 특가 베스트')
  res.json(HotPriceBestSeller[0])
})
export default router;