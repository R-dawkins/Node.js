import express, { urlencoded } from 'express';
import ejs from 'ejs';
import { replyList } from './reply.js';
const router = express.Router();
const newsList = []; //nid, url, title, content, rdate
router.use(express.urlencoded({extended:true}));
router.use(express.json());
router.get('/',(req, res, next) => {
  let renderList = newsList;
  ejs
  .renderFile('./template/list.ejs', {renderList})
  .then(data=>{res.end(data)})
});

router.post('/register',(req, res, next) => {
  let {url,title,content} = req.body
  let nid = Math.trunc(Math.random() * 1000);
  let rdate = new Date(Date.now());
  rdate = rdate.toLocaleDateString();
  newsList.push({url,title,content,nid,rdate});

  res.status(201).redirect('/news')
})

router.get('/:nid',(req, res, next) => {
  let nid = req.params.nid
  const newsContent = newsList.filter((list)=>list.nid === parseInt(nid))[0];// index가 0번인 json객체만 넘어가기때문에 newsContent가 배열이아니라 객체가 된다
  console.log(replyList);
  const reply = replyList.filter((list)=>list.nid === nid);
  console.log(reply);
  ejs
  .renderFile('./template/content.ejs',{newsContent,reply})
  .then(data=>res.end(data))
})


export default router;