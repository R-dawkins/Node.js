import express, { json, urlencoded } from 'express';
import ejs from 'ejs';
import { replyText } from './reply.js';

const router = express.Router();
const newsContent = [];
router.use(express.urlencoded({extended:true}));
router.use(express.json());
let num = 0;
router
.get('/',(req, res, next) => {
  const renderFile = newsContent;

  ejs.renderFile('./template/news.ejs',{renderFile})
  .then(data => res.end(data))
});
router
.post('/register',(req, res, next) => {
  let nid = Math.floor(Math.random()*1000)

  const {url,title,content} = req.body;
  newsContent.push({nid:nid,url:url,title:title,content:content,num:++num});
  console.log(newsContent);
  res.redirect('/news')
});

router.get('/:nid',(req, res, next) => {
  let nid = req.params.nid
  const renderFile = newsContent.filter(list=>list.nid == nid)
  const renderReply = replyText.filter(list=>list.nid == nid)
  ejs.renderFile('./template/content.ejs',{renderFile,renderReply})
  .then(data => res.end(data))
});

export default router;