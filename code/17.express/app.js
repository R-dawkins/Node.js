const express = require('express');
const server = express();
const address = [];
const scoreList = [
  {name:'HTML', grade:'A'},
  {name:'Node.js', grade:'B'},
  {name:'CSS', grade:'C'},
  {name:'JavaScript', grade:'D'}
];
//use,or?all? 사용법 알기
server.get('/',(req, res) => {
  res.send('Hello World!!!')
  console.log(req.headers);
  console.log(req.url);
})
.post('/course',(req,res)=>{
  const body = [];
  req
  .on('data', (chunk)=>{
    body.push(chunk)
  })
  .on('end',()=>{
    scoreList.push(JSON.parse(Buffer.concat(body).toString()))
  })
  res.status(201).end();
})
.get('/course',(req,res)=>{
  res.setHeader('Content-Type', 'application/json')
  res.status(200);
  res.json(scoreList);
})
.post('/address',(req, res) => {
const body = [];
req
.on('data',(chunk)=>{
  // address.push(JSON.parse(chunk.toString()))
  // address.push(chunk);
  body.push(chunk)
})
.on('end',()=>{
  address.push(JSON.parse(Buffer.concat(body).toString()));
  res.status(201).end();
  })
})
.get('/address',(req, res) => {
  res.setHeader('Content-Type', 'application/json')
  res.json(address)
})

//미리 만들어두면 오류 발생 가능하니 필요할 때 호출
//미들웨어: 클라이언트에게서 받은 요청을 서버가 처리하도록 중간에서 중개하는 역할
//server.get,server.post를 미들웨어 함수라 할 수 있다 체이닝 가능
//
server.listen(3300);
