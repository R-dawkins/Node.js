//1. 주소록(address) 배열 객체 생성
//2. POST 방식으로 이름, 주소를 입력받아 address에 추가
//3. GET 방식으로 주소록 (address) 확인
const http = require('http');
const address = [];//배열 생성
const server = http.createServer((req,res)=>{
const url = req.url
const method = req.method
if(url === '/'){
  res.write('<h1>Welcome!</h1>')
  res.end();
}else if(url === '/address'){
  if(method === 'GET'){
    console.log(address);

    //address 배열을 JSON형식 문자열로 인코딩
    if(address.length != 0){
      res
      .writeHead(200,{
        'Content-Type' : 'application/json'
      })
      .end(JSON.stringify(address)); 
      //[{},{}]과 같은 json형태로 데이터를 받았기 때문에 JSON.stringify가 가능한 것
    }else {
      res.end('no data');
      
    }
  }else if(method === 'POST'){
    const body = [];
    req.on('data',((chunk)=>{
      //POST요청으로 body에 담긴 json 형식 데이터를 버퍼로 받는 이벤트
      body.push(chunk)//body 배열에 chunk(버퍼)상태로 푸쉬
    }))
    .on('end',()=>{
      const bodyStr = Buffer.concat(body).toString()//문자열로 변환
      //concat은 여러 버퍼 객체를 하나의 버퍼 객체로 결합하는 함수
      const bodyJson = JSON.parse(bodyStr)//JSON 문자열을 객체로 변환
      address.push(bodyJson)//address에 객체 푸쉬
      // address.push(JSON.parse(Buffer.concat(body).toString())) 이렇게도 가능하지만 초보일땐 가독성이 떨어짐
      res.writeHead(201).end()//성공적으로 전송됐다고 201 응답하고 종료
    })
  }
}else{
  res.write('page not found')
}


})

server.listen(3000)