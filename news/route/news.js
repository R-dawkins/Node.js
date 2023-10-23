import express, { urlencoded } from 'express';
import dbConfig from '../db/database.js';
import ejs from 'ejs';
const conn = dbConfig.init();
dbConfig.connect(conn);
// import { replyList } from './reply.js';
const router = express.Router();
const newsList = []; //nid, url, title, content, rdate
router.use(express.urlencoded({extended:true}));
router.use(express.json());
router.get('/',(req, res, next) => {
  // let renderList = newsList;
  const sql = 'select nid,url,title,content,left(rdate,10) rdate from news'
  conn.query(sql,(err,rows,field)=>{
    if(err) console.log(err)
    ejs
  .renderFile('./template/list.ejs', {list:rows})
  .then(data=>{res.end(data)})
  })
});

router.post('/register',(req, res, next) => {
  let {url,title,content} = req.body
  // let nid = Math.trunc(Math.random() * 1000);
  const params = [url,title,content];
  const sql = 'insert news(url,title,content,rdate) values(?,?,?,curdate())';
  conn.query(sql,params,(err)=>{
    if(err) console.log(err)
    else{
      res.status(201).redirect('/news')
    }
  })
  // let rdate = new Date(Date.now());
  // rdate = rdate.toLocaleDateString();
  // newsList.push({url,title,content,nid,rdate});

  
})

router.get('/:nid',(req, res, next) => {
  let nid = req.params.nid
  const sql = 'select nid,url,title,content,left(rdate,10) rdate from news where nid=?'
  conn.query(sql,nid,(err,rows,field)=>{
    if(err) console.log(err)
    ejs
  .renderFile('./template/content.ejs', {newsContent:rows[0]})
  .then(data=>{res.end(data)})
  })
  // const newsContent = newsList.filter((list)=>list.nid === parseInt(nid))[0];// index가 0번인 json객체만 넘어가기때문에 newsContent가 배열이아니라 객체가 된다
  // const reply = replyList.filter((list)=>list.nid === nid);
  // console.log(reply);
  // ejs
  // .renderFile('./template/content.ejs',{newsContent})//,reply
  // .then(data=>res.end(data))
})

router.delete('/remove',(req, res, next) => {
  let nid = req.body.nid
  const sql = 'delete from news where nid=?'
  conn.query(sql,nid,(err)=>{
    if(err) console.log(err)
    else{
    res.status(204).send('delete success')
    }
  })
})


export default router;