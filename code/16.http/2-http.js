//1. http://192.168.50.6:9000 주소로 서버 만들기, 실행
//2. 접속한 클라이언트의 url에 따라 결과를 전송해 주세요.
/*
  / ---> ./test/main.html
  /courses ---> ./test/courses/courses.html
  /login ---> ./test/login/login.html
  기타주소 ---> ./test/error.html

*/


const fs = require('fs');
const http = require('http');
console.log('server start~');
const server = http.createServer((req, res)=>{
  console.log('incoming');
  const url = req.url;
  if(url === '/'){
    fs.createReadStream('./test/main.html').pipe(res)
  }else if(url === '/courses'){
    fs.createReadStream('./test/courses/courses.html').pipe(res)
  }else if(url === '/login'){
    fs.createReadStream('./test/login/login.html').pipe(res)
  }else{
    fs.createReadStream('./test/error.html').pipe(res)
  }
})

server.listen(9000);