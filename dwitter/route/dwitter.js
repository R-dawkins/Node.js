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
    const renderList = dwitterList; //블록스코프 활용하여 렌더링 할 때만 쓸 배열 생성
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

// 3.  GET: /dwitter/:id - my tweets list
// a태그로 넘어오는 데이터는 get방식으로 넘어온다
router.get('/:id',(req, res, next) => {
  let id = req.params.id
  const renderList = dwitterList.filter((list)=> list.id === id) //블록스코프 활용하여 렌더링만 할 배열 생성 전역을 건드리지(변경) 않는다
  //if(list.id === id){return list}를 축약한 것이 위 문장
  
  
  ejs
  .renderFile('./template/index.ejs', {renderList})
  .then((data)=>{
    res.end(data)
  })//app.js에서 실행되기때문에 app.js 기준으로 패스를 설정해야한다.
  .catch(console.error)
  res.status(200)
})

// 5.  DELETE: /dwitter/:id - my dweet delete
router.delete('/',(req, res, next) => {
  const {pid} = req.body;
  dwitterList = dwitterList.filter((dwitter)=>dwitter.pid !== parseInt(pid));
  // dwitterList.filter((list,idx,source)=>{
  //   if(list.pid === parseInt(pid)){
  //     dwitterList.splice(idx,1)
  //   }
  // })
  res.status(204).send('delete success')
})


//토글기능
//pk(private key)
//블록 스코핑을 이용한 my dweet
//crud작업? db(mysql)랑 서버(node.js)데이터 교환(read) ,수정(update, delete, create) 등의 작업
//댓글에도 어떤 글에 댓글을 썻는지 구분하는 id가 필요함
//어떤 글의 id가 100이라면 댓글에도 그 100이라는 id가 필요
//https://news.naver.com/main/main.naver?mode=LSD&mid=shm&sid1=101 구현연습
export default router







