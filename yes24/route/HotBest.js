import express from 'express';
import { listArray } from './data.js';
import dbConfig from '../db/database.js';
const conn = dbConfig.init();
dbConfig.connect(conn);
const router = express.Router();
router.use(express.urlencoded({extended:true}));
router.use(express.json());

router.get('/:page',(req, res, next) => {
  const sql = "select category_name,url,bname,author,translator,publisher,pday,format(price,0) price from books b inner join book_category c on b.category = c.category where b.category='HotPriceBestSeller'"
  conn.query(sql,(err,rows,field)=>{
    res.json(rows)
  })
  /* const page = req.params.page
  const HotPriceBestSeller = listArray.filter((list)=>list.title === '국내도서 특가 베스트')
  res.json(HotPriceBestSeller[0]) */
})
export default router;