import express from "express";
const router = express.Router();//기존의 서버의 요청을 넘겨받을 대상

router
.get('/', (req,res,next)=>{
  console.log('first route');
  res.send(`GET: / route`)
  next();//next로 다음 콜백함수로 넘어갈 수 있다 response해도 넘어감
  },
  (req, res, next) => {
  console.log('second route');
  // res.send('GET: /')
  }
)
.post('/',(req,res,next)=>{
  res.send('POST: /')
})
.put('/:id/:name/:address',(req,res,next)=>{
  const {id,name,address} = req.params
  // const id = req.params.id 이와 같은 방식으로 사용해도 되고 구조분해로 사용해도 된다
  // http://localhost:8080/hong 8080/뒤의 값이 id가 됨
  // /id/name/address 해커들의 후킹을 방지하기위해 경로인지 값인지 헷갈리게 만듦
  res.send(`PUT: /:id --->> ${id},${name},${address}`)
})
.delete('/:id',(req,res,next)=>{
  const id = req.params.id
  res.send(`DELETE: /:id --->> ${id}`)
})


export default router; //export default 해줘야함