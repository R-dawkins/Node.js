import express from "express";
const route = express.Router();

route
.post('/', (req, res, next) => {
  const {name, address} = req.body;
  console.log(`${name},${address}`);
  res.status(201).send(`${name},${address} finish`);
  //status만 주면 응답이 끝나지않는다

  //POST : name, address(POST방식은 body를 통해 넘어오는데 인코딩과 json객체 전환 과정을 거쳐야함)
  // ---> http://localhost:8080/join res : 201 전송
}).use((req, res, next) => {
  res.status(404).send('404 error File not found')
})
//404 에러 처리


export default route;