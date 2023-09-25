const fs = require('fs');
const http = require('http');
const ejs = require('ejs');
const { error } = require('console');
const name = 'Hong';
const courses = [
  {name:'HTML'},
  {name:'Node.js'},
  {name:'CSS'},
  {name:'JavaScript'}
];
const scoreList = [
  {name:'HTML', grade:'A'},
  {name:'Node.js', grade:'B'},
  {name:'CSS', grade:'C'},
  {name:'JavaScript', grade:'D'}
];
console.log('-- server start --');
const server = http.createServer((req,res)=>{
  console.log('incoming');
  //1. 클라이언트 요청 : / ---> index.ejs
  const url = req.url;
  console.log(url);
  
  //2. 클라이언트 전송타입
  res.setHeader('Content-Type','text/html'); //HTML 브라우저가 해석할 타입을 지정
  
  //3. if로 패스 체크
  //4. ejs.renderFile() - promise 타입 처리
  //template 서버, template 엔진 : react,express....
  //
  if(url === '/'){
    // res.write('welcome');
    ejs.renderFile('./template/index.ejs',{name})//ejs파일이 넘어가는 것이 아니라 name 변수와 ejs파일이 합쳐져서 렌더링 된 데이터가 넘어가서 출력되는 것
    .then(data => res.end(data))//따라서 data를 넘겨줘야 정상적으로 실행된다 (렌더링 된 데이터를 받아서 넘김)
    .catch(console.error);
  }
  else if(url === '/courses'){
    ejs.renderFile('./template/courses.ejs',{courses})
    .then(data=> res.end(data))
    .catch(console.error);
  }
  else if(url === '/score'){
    ejs.renderFile('./template/score.ejs',{scoreList})
    .then(data=> res.end(data))
    .catch(console.error);
  }
  else{
    ejs.renderFile('./template/error.ejs',{name})
    .then(data => res.end(data))
    .catch(console.error);
  }
  
  // res.end();
})
server.listen(3000);