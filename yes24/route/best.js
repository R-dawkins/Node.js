import express from 'express';
import ejs from 'ejs';
import { listArray } from './data.js';
const router = express.Router();
router.use(express.urlencoded({extended:true}));
router.use(express.json());

router.get('/',(req, res, next) => {
  // const list = listArray.filter((list)=> list.category === 'best')

  ejs.renderFile('./template/yes24.ejs',{listArray})
  .then(result => res.end(result));
})
router.get('/:page',(req, res, next) => {
  console.log(listArray);
  const BestSeller = listArray.filter(list=>list.title === '국내도서 종합 베스트')
  res.json(BestSeller[0])
  console.log(BestSeller);
})




export default router;