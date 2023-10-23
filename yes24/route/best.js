import express from 'express';
import ejs from 'ejs';
import { listArray } from './data.js';
import dbConfig from '../db/database.js';
const conn = dbConfig.init();
dbConfig.connect(conn);

const router = express.Router();
router.use(express.urlencoded({extended:true}));
router.use(express.json());

router.get('/',(req, res, next) => {
  // const list = listArray.filter((list)=> list.category === 'best')
  const sql = "select category_name,url,bname,author,translator,publisher,pday,price from books b inner join book_category c on b.category = c.category where b.category='BestSeller'"
  conn.query(sql,(err,rows,field)=>{
    
    ejs.renderFile('./template/yes24.ejs',{list:rows})
    .then(result => res.end(result));
  })
})
router.get('/:page',(req, res, next) => {
  // console.log(listArray);
  const sql = "select category_name,url,bname,author,translator,publisher,pday,price from books b inner join book_category c on b.category = c.category where b.category='BestSeller'"
  conn.query(sql,(err,rows,field)=>{
    res.json(rows)
  })
    // console.log(rows);
    // ejs.renderFile('./template/yes24.ejs',{list:rows})
    // .then(result => res.end(result));
  // const BestSeller = listArray.filter(list=>list.title === '국내도서 종합 베스트')
  // res.json(BestSeller[0])
  // console.log(BestSeller);
})




export default router;