import express from 'express';
import ejs from 'ejs';
const router = express.Router();
export const replyList = [];
router.use(express.urlencoded({extended:true}));
router.use(express.json());

router.post('/',(req, res, next) => {
  
  const {nid, replyContent} = req.body;
  console.log({nid, replyContent});
  replyList.push({nid,replyContent})
  res.status(201).send('success')
})

export default router