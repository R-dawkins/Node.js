import express from 'express';
import ejs from 'ejs';
import dbConfig from '../db/database.js';
const router = express.Router();
const conn = dbConfig.init();
dbConfig.connect(conn);
// export const replyList = [];
const replyList = [];
// let reply = [];
router.use(express.urlencoded({extended:true}));
router.use(express.json());

router.get('/:nid',(req, res, next) => {
  const nid = req.params.nid;
  const sql = 'select rid,nid,left(redate,19) redate,content from news_reply where nid=?';
  conn.query(sql,nid,(err,rows,field)=>{
    res.json(rows);
  })
  // reply = replyList.filter((list)=>list.nid === nid);
  
})

router.post('/',(req, res, next) => {
  const {nid, content} = req.body;
  const sql = 'insert news_reply(nid,redate,content) values(?,sysdate(),?)';
  const params = [nid, content];
  conn.query(sql,params,(err)=>{
    if(err) console.log(err)
    else{
    res.status(201).send('create success!!')
    }
  })
// replyList.unshift({nid,content})
// array.unshift() /* 메서드는 배열의 처음에 요소를 추가합니다. 이 메서드는 배열의 길이를 1 늘립니다. */
// replyList.push({nid,content})
// replyList.shift({nid,content}); /* 배열의 첫번째 요소를 삭제하고 그 요소를 반환 */
})

router.delete('/remove',(req, res, next) => {
  const {nid,rid} = req.body;
  const sql = 'delete from news_reply where nid=? and rid =?'
  const params = [nid,rid];
  conn.query(sql,params,(err)=>{
    if(err) console.log(err)
    else{
      res.status(204).send('delete success')
    }
  })
})

export default router