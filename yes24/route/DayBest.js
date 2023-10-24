import express from 'express';
import { listArray } from './data.js';
const router = express.Router();
import dbConfig from '../db/database.js';
const conn = dbConfig.init();
dbConfig.connect(conn);
router.use(express.urlencoded({extended:true}));
router.use(express.json());

router.get('/:page',(req, res, next) => {
  const sql = "select bid,category_name,url,bname,author,translator,publisher,pday,format(price,0) price from books b inner join book_category c on b.category = c.category where b.category='DayBestSeller'"
  conn.query(sql,(err,rows,field)=>{
    res.json(rows)
  })

  // const page = req.params.page
  // const DayBestSeller = listArray.filter(list=>list.title === '국내도서 일별 베스트')
  // res.json(DayBestSeller[0])
})
export default router;