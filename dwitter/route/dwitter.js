import express from 'express';
import ejs from 'ejs';
import dbConfig from '../db/database.js'
const conn = dbConfig.init();
dbConfig.connect(conn);

const router = express.Router();
// let dwitterList = [
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
// ];
//전역으로 배열 선언

//서버에서 그때그때 받아오는 데이터들을 동적데이터 다이나믹데이터 (서버나 메모리와 연동된 데이터)
//가만히 있는 데이터는 정적 데이터 스태틱 데이터
// 1. GET: /dwitter - all tweets list
// http://localhost:8080/dwitter
router.use(express.urlencoded({extended:true}));
router.use(express.json())
router
.get('/',(req, res, next) => {
    // const renderList = dwitterList;
    //블록스코프 활용하여 렌더링 할 때만 쓸 배열 생성
    const sql = 'select id,name,content,left(date,10) date from dwitter'
    //left(date,10)에 alias를 주지 않으면 left(date,10)으로 반환하기 때문에 별명을 주거나 출력컬럼명을 바꾸거나 해야한다.
    // 아스타 * 보다 컬럼명을 명확히 주는게 더 좋다 오류 발생 가능성
    // row = 값 ex) test,테스트,내용,날짜
    // field = 카테고리 이름 ex) id,name,content,date
    conn.query(sql,(err,rows,field)=>{
      if(err){ console.log(err);
      }else{
        ejs
        .renderFile('./template/index.ejs', {list:rows})
        .then((data)=>{
          res.end(data)
        })//app.js에서 실행되기때문에 app.js 기준으로 패스를 설정해야한다.
        .catch(console.error)
        
      }
    })
    
});

// crud 작업시 pk(private key)가 반드시 필요하다
// 2. POST: /dwitter - tweet create
router.post('/',(req, res, next) => {
  const {id,name,content} = req.body
  const params = [id,name,content];
  const sql = 'insert into dwitter(id,name,date,content) values(?,?,curdate(),?)'// values의 ?표시는 값이 정해지지 않았지만 들어갈 값이 있을때 맵핑하는 용도 ?가 있으면 반드시 파라미터를 넘겨주어야한다.
  //conn.query의 params는 js에서 sql로 넘어갈 인자들을 배열형태로 넘기는 곳 json형태로 넘길수 없다.
  conn.query(sql,params,(err)=>{
    if (err) console.log('query is not execute!!!');
    else res.redirect('/dwitter');
    
  })
  



  // SQL 연동 없이 js만으로 할 때
  // const pid = Math.trunc(Math.random() * 1000);
  // let date = new Date(Date.now());
  // date = date.toLocaleDateString();
  // dwitterList.push({id,name,content,pid,date})
  // res.redirect('/dwitter')
})

// 4.  PUT: /dwitter/:id - my dweet update
router.put('/',(req, res, next) => {
  const {id, content} = req.body;
  const params = [content,id];
  //쿼리에 들어가는 값의 순서대로 넣는것을 추천
  const sql = 'update dwitter set content=? where id=?'
  conn.query(sql,params,(err)=>{
    if (err) console.log('query is not execute!!!');
    else res.status(204).send('update success')
  })


  /* dwitterList.filter((list)=> {
    if(list.pid === parseInt(pid)){
      list.content = content;
    }
  });
  res.status(204).send('update success') */
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
  // params에 들어갈 데이터가 하나라면 그 데이터만 넣어도 된다.
  // 여러개라면 배열형태로
  const sql = 'select id,name,left(date,10) as date, content from dwitter where id=?'
  // const renderList = dwitterList.filter((list)=> list.id === id) 
  //블록스코프 활용하여 렌더링만 할 배열 생성 전역을 건드리지(변경) 않는다
  //if(list.id === id){return list}를 축약한 것이 위 문장
  conn.query(sql,id,(err,rows,field)=>{
    if(err){ console.log(err);
    }else{
      // let filterRows = rows.filter((obj)=>obj.id === id);
      // sql에서 select에 where절을 주면 되기 때문에 필터를 넣을 필요가 없다.
      ejs
      .renderFile('./template/index.ejs', {list:rows})
      .then((data)=>{
        res.end(data)
      })//app.js에서 실행되기때문에 app.js 기준으로 패스를 설정해야한다.
      .catch(console.error)
      
    }
  })
  
  // ejs
  // .renderFile('./template/index.ejs', {renderList})
  // .then((data)=>{
  //   res.end(data)
  // })//app.js에서 실행되기때문에 app.js 기준으로 패스를 설정해야한다.
  // .catch(console.error)
  // res.status(200)

})

// 5.  DELETE: /dwitter/:id - my dweet delete
router.delete('/',(req, res, next) => {
  const {id} = req.body;
  const sql ='delete from dwitter where id=?'
  conn.query(sql,id,(err)=>{
  if(err) console.log(err)
  else{
    res.status(204).send('delete success')
  }



  })
  // dwitterList = dwitterList.filter((dwitter)=>dwitter.pid !== parseInt(pid));
  // dwitterList.filter((list,idx,source)=>{
  //   if(list.pid === parseInt(pid)){
  //     dwitterList.splice(idx,1)
  //   }
  // })
})




//토글기능
//pk(private key)
//블록 스코핑을 이용한 my dweet
//crud작업? db(mysql)랑 서버(node.js)데이터 교환(read) ,수정(update, delete, create) 등의 작업
//댓글에도 어떤 글에 댓글을 썻는지 구분하는 id가 필요함
//어떤 글의 id가 100이라면 댓글에도 그 100이라는 id가 필요
//https://news.naver.com/main/main.naver?mode=LSD&mid=shm&sid1=101 구현연습
export default router







