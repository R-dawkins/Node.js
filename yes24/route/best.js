import express from 'express';
import ejs from 'ejs';
import dbConfig from '../db/database.js';
const conn = dbConfig.init();
dbConfig.connect(conn);

const router = express.Router();
router.use(express.urlencoded({extended:true}));
router.use(express.json());

router.get('/',(req, res, next) => {
  // const list = listArray.filter((list)=> list.category === 'best')
  const sql = "select bid, category_name,url,bname,author,translator,publisher,pday,format(price,0) price from books b inner join book_category c on b.category = c.category where b.category='BestSeller'"
  conn.query(sql,(err,rows,field)=>{
    
    ejs.renderFile('./template/yes24.ejs',{list:rows})
    .then(result => res.end(result));
  })
})
router.get('/:page',(req, res, next) => {
  // console.log(listArray);
  const sql = "select bid, category_name,url,bname,author,translator,publisher,pday,format(price,0) price from books b inner join book_category c on b.category = c.category where b.category='BestSeller'"
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

router.delete('/delete',(req, res, next) => {
  let bid = req.body.bid

  const sql ="delete from books where bid =?"
  conn.query(sql,bid,(err)=>{
    res.status(204).send('delete success');
  })

})




export default router;