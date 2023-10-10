import express from 'express';
import { listArray } from './data.js';
const router = express.Router();
router.use(express.urlencoded({extended:true}));
router.use(express.json());

router.get('/:page',(req, res, next) => {
  const page = req.params.page
  const SteadySeller = listArray.filter((list)=>list.title === '국내도서 스테디 셀러')
  res.json(SteadySeller[0])
})
export default router;