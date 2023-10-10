import express from 'express';
import ejs from 'ejs';
import { listArray } from './data.js';
const router = express.Router();

router.use(express.urlencoded({extended:true}));
router.use(express.json());

router
.get('/:page',(req, res, next) => {
  const page = req.params.page
  const RealTimeBestSeller = listArray.filter((list)=>list.title === '국내도서 실시간 베스트')
  res.json(RealTimeBestSeller[0])
})


export default router;