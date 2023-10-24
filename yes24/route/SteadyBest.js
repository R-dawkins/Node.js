import express from 'express';
import { listArray } from './data.js';
import dbConfig from '../db/database.js';
const conn = dbConfig.init();
dbConfig.connect(conn);
const router = express.Router();
router.use(express.urlencoded({extended:true}));
router.use(express.json());

router.get('/:page',(req, res, next) => {
  const sql = "select category_name,url,bname,author,translator,publisher,pday,format(price,0) price from books b inner join book_category c on b.category = c.category where b.category='SteadySeller'"
  conn.query(sql,(err,rows,field)=>{
    res.json(rows)
  })
  /* const page = req.params.page
  const SteadySeller = listArray.filter((list)=>list.title === '국내도서 스테디 셀러')
  res.json(SteadySeller[0]) */
})
export default router;