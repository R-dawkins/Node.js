import express from 'express';
import ejs from 'ejs';
const router = express.Router();
// export const replyList = [];
const replyList = [];
let reply = [];
router.use(express.urlencoded({extended:true}));
router.use(express.json());

router.get('/:nid',(req, res, next) => {
  const nid = req.params.nid;
  reply = replyList.filter((list)=>list.nid === nid);
  res.json(reply);
})

router.post('/',(req, res, next) => {
  
  const {nid, replyContent} = req.body;
  replyList.unshift({nid,replyContent})
  //array.unshift() 메서드는 배열의 처음에 요소를 추가합니다. 이 메서드는 배열의 길이를 1 늘립니다.
  /* replyList.push({nid,replyContent}) */
  /* replyList.shift({nid,replyContent}); 배열의 첫번째 요소를 삭제하고 그 요소를 반환*/
  res.status(201).send('create success!!')
})



export default router