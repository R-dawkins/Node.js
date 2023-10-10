import express from 'express';
import { listArray } from './data.js';
const router = express.Router();
router.use(express.urlencoded({extended:true}));
router.use(express.json());

router.get('/:page',(req, res, next) => {
  const page = req.params.page
  const MonthWeekBestSeller = listArray.filter((list)=>list.title === '국내도서 월간 베스트')
  res.json(MonthWeekBestSeller[0])
})
export default router;