import express from 'express';

const route = express.Router();

route
.get('/',(req, res, next) => {
  const {keyword,name} = req.query
  // const keyword = req.query.keyword; 구조분해 가능
  // const name = req.query.name;
  //http://localhost:8080/test/?keyword=bts
  //http://localhost:8080/test?keyword=bts&name=hong ?뒤의 /는 있어도 되고 없어도 되는듯
  //http://localhost:8080/test/?keyword=bts &name=hong 공백이 있으면 뒤를 인식하지 못함 undefined
  res.send(`GET: /test ---> ${keyword},${name}`)
  //GET: /test ---> bts,hong
})

export default route;