import express from 'express';
import ejs from 'ejs';
const router = express.Router();
export const replyText = [];
router.use(express.urlencoded({extended:true}));
router.use(express.json());
router
.post('/reply/:nid',((req,res,next)=>{
let nid = req.params.nid;
let {nickname,reply} = req.body;
console.log(nid);
console.log(req.body);
replyText.push({nickname:nickname,reply:reply,nid:nid})
res.status(201).send('create success')

}));



export default router;