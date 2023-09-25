const http = require('http');
const fs = require('fs');
const ejs = require('ejs');

//서버 생성 : createServer()
console.log('server start~');
const server = http.createServer((req, res)=>{// req - request정보 받는 변수 , res -response 응답할 정보 넘기는 변수
  console.log('incoming...');
  console.log(req.headers);
  console.log(req.httpVersion);
  console.log(req.method);
  console.log(req.url); //pathname 출력 (포트이후)
  const url = req.url;
  console.log(`url---> ${url}`);
  //res.write(`<h1>Welcome!</h1>`); 'Welcome!에 html 파일을 넣을 수도 있다
  //응답(response) -url의 path에 따라 응답 처리 가능
  res.setHeader('Content-Type', 'text/html'); 
  if(url === '/'){
    fs.createReadStream('./html/index.html')//html파일을 읽어와서 버퍼로 저장 -chunk 
    .pipe(res);//res에 전달
  //stream을 이용해서 html파일을 전송하기
  }else if(url === '/courses'){
    fs.createReadStream('./html/courses.html').pipe(res);
  }else{
    fs.createReadStream('./html/error.html').pipe(res);
  }
  
  // res.end();//더이상 보낼 데이터가 없을 때
});
server.listen(8080); //http://localhost:8080, http://127.0.0.1:8080, http://(cmd ipconfig ipv4 주소):8080
//port번호 지정
//8080 포트 충돌이 날 시 오라클설치여부, 자바서버구동중인지 확인