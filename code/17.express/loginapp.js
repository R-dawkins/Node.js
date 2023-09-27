const express = require('express');
const app = express();
const process = require('process');
const path = require('path');
const member = [{id: 'test',pw:'1234'},{id: 'test2',pw:'12345'}]

//https://expressjs.com/en/starter/generator.html
/* 
express와 같은 pramework에는 요구하는 directory structure가 있다(정해진 틀)
그를 따르는 것을 권장한다

 */

//
app.use(express.json())//express.json 미들웨어를 사용해서 넘어온 데이터를 json으로 변환
//HTTP 요청의 본문을 JSON으로 변환하여 그 데이터를 요청 객체의 body 속성에 저장
//따라서 req.body는 json 객체라고 볼 수 있다
app.use(express.urlencoded({extended:true}))//인코딩작업
//post 미들웨어를 실행하기전에 있어야함 (최상위도 괜찮음)
app
.get('/',(req,res)=>{
  const indexPath = path.join(__dirname,'index.html')
  res.sendFile(indexPath)
})
.get('/login',(req,res)=>{
  const loginPath = path.join(__dirname,'login.html')
  console.log(path.join(__dirname,'login.html'));
  console.log(path.join(process.cwd(),'login.html'));
  res.sendFile(loginPath)
  //sendFile은 express 라이브러리 안의 경로에서부터 찾기 때문에 절대경로를 적어줘야함
  //아니면 express라이브러리 안 경로에 파일을 넣어두든지
})
.get('/join',(req,res)=>{
  res.sendFile(path.join(__dirname,'join.html'))
})

app.post('/join',(req,res)=>{
  const {name,id,pw,address} = req.body;
  res.send(`
  이름 :${name}
  아이디 :${id}
  비밀번호 :${pw}
  주소 : ${address}
  <br>
  <a href="/login">로그인화면으로</a>
  `)
  console.log({id,pw});
  console.log(req.body);
  member.push(req.body)
  console.log(member);
})

app.post('/login',(req,res)=>{
  console.log(req.body);
  const {id, pw} = req.body;//input의 name attribute의 값이 키name으로 body로 넘어온다
  let memberId;
  let memberPw;
  let result = 0;
    /* member.forEach((obj)=>{// 데이터 비효율적인 방식
    if(obj.id === id && obj.pw === pw) {
      memberId = obj.id;
      memberPw = obj.pw;
    }
  }) */
  //member에서 id,pass 일치하면 1 일치하지 않으면 0
  //데이터를 찾자마자 빠져나와야하기때문에 자연스럽게 데이터를 찾자마자 종료되는
  //기본 for문이 좋다
    for(let i=0; i<member.length; i++){
      let mem = member[i];
      if(id === mem.id && pw === mem.pw){
        result = 1;
        i = member.length;
        //break로 for문을 끝내도 되지만 메모리 비효율적
        //i를 member.length와 같게 만들어서 자연스럽게 종료한다
      }
    }
  console.log(memberPw);
  console.log(memberId);
  if(result === 1){
    res.redirect('/')
    //sendFile은 파일을 보내는 것이기 때문에 메모리 비효율적이다
    //따라서 있는 경로일 경우 서버측에서 redirect 시켜준다
  }
  else{
    res.sendFile(path.join(__dirname,'loginFail.html'));
  }
})

app.get('/error',(req,res)=>{
  res.sendFile(path.join(__dirname,'error.html'));
})

app.listen(8080);