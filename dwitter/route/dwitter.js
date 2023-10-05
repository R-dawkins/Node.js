import express from 'express';
import ejs from 'ejs';
import path from 'path';
const router = express.Router();
let dwitterList = [
/*   {
    pid : 100,
    id : 'james',
    name : '제임스',
    date : '2023. 10. 5.',
    content : '안녕하세요 제임스입니다.',
  },
  {
    pid : 101,
    id : 'hong',
    name : '홍길동',
    date : '2023. 10. 5.',
    content : '안녕하세요 홍길동입니다.'

  } */
];
//전역으로 배열 선언

//서버에서 그때그때 받아오는 데이터들을 동적데이터 다이나믹데이터 (서버나 메모리와 연동된 데이터)
//가만히 있는 데이터는 정적 데이터 스태틱 데이터
// 1. GET: /dwitter - all tweets list
// http://localhost:8080/dwitter
router.use(express.urlencoded({extended:true}));
router.use(express.json())
router
.get('/',(req, res, next) => {
    const renderList = dwitterList; //블록스코프 활용하여 렌더링만 할 배열 생성
    ejs
    .renderFile('./template/index.ejs', {renderList})
    .then((data)=>{
      res.end(data)
    })//app.js에서 실행되기때문에 app.js 기준으로 패스를 설정해야한다.
    .catch(console.error)
});

// crud 작업시 pk(private key)가 반드시 필요하다
// 2. POST: /dwitter - tweet create
router.post('/',(req, res, next) => {
  const {id,name,content} = req.body
  const pid = Math.trunc(Math.random() * 1000);
  let date = new Date(Date.now());
  date = date.toLocaleDateString();
  console.log({id,name,content,pid,date});
  dwitterList.push({id,name,content,pid,date})
  res.redirect('/dwitter')// 
})

// 4.  PUT: /dwitter/:id - my dweet update
router.put('/',(req, res, next) => {
  const {pid, content} = req.body;
  dwitterList.filter((list)=> {
    if(list.pid === parseInt(pid)){
      list.content = content;
    }
  });
  res.status(204).send('update success')
});

router.delete('/',(req, res, next) => {
  const {pid} = req.body;
  dwitterList = dwitterList.filter((dwitter)=>dwitter.pid !== parseInt(pid));
  console.log(dwitterList);
  // dwitterList.filter((list,idx,source)=>{
  //   if(list.pid === parseInt(pid)){
  //     dwitterList.splice(idx,1)
  //   }
  // })
  res.status(204).send('delete success')
})


/* .delete('/:id',(req, res, next) => {
  const pid = req.params.id
  for(let i=0;i<dwitterList.length;i++){
    let member = dwitterList[i]
    if(member.pid === pid)
    {
      delete dwitterList[i]
      console.log(dwitterList);
      res.redirect('/dwitter')
    }
  }
}) */

router.get('/:id',(req, res, next) => {
  console.log(req.params.id);
  
  let id = req.params.id
  let mydweet = dwitterList.filter((list)=> list.id === id) //블록스코프 활용하여 렌더링만 할 배열 생성 전역을 건드리지(변경) 않는다
  console.log(dwitterList);
  const renderList = mydweet;
  ejs
  .renderFile('./template/index.ejs', {renderList})
  .then((data)=>{
    res.end(data)
  })//app.js에서 실행되기때문에 app.js 기준으로 패스를 설정해야한다.
  .catch(console.error)
  res.status(200)
})


// 3.  GET: /dwitter/:id - my tweets list
// a태그로 넘어오는 데이터는 get방식으로 넘어온다

// 5.  DELETE: /dwitter/:id - my dweet delete


export default router







