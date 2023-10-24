import express from 'express';
import ejs from 'ejs';
import { listArray } from './data.js';
import dbConfig from '../db/database.js';
const conn = dbConfig.init();
dbConfig.connect(conn);
const router = express.Router();

router.use(express.urlencoded({extended:true}));
router.use(express.json());

router
.get('/:page',(req, res, next) => {
  const sql = "select bid,category_name,url,bname,author,translator,publisher,pday,format(price,0) price from books b inner join book_category c on b.category = c.category where b.category='RealTimeBestSeller'"
  conn.query(sql,(err,rows,field)=>{
    res.json(rows)
  })
  /* const page = req.params.page
  const RealTimeBestSeller = listArray.filter((list)=>list.title === '국내도서 실시간 베스트')
  res.json(RealTimeBestSeller[0]) */
})


export default router;