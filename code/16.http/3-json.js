const http = require('http');
//POST는 데이터가 body에 붙어서 넘어감
/* POSTMAN에서는 ""만 사용 가능 JSON은 raw*/

const courses = [
  {name : 'HTML'},
  {name : 'CSS'},
  {name : 'JavaScript'},
  {name : 'Node'},
  {name : 'Express'},
]

//서버 생성
const server = http.createServer((req,res)=>{
  //url
  const url = req.url;
  // console.log(url);
  
  //method
  console.log(req.method);
  
  if(url === '/courses'){
    console.log(url);
    if(req.method === 'GET'){
      const str = JSON.stringify(courses)//json을 string으로 바꿔서 넘김
      console.log(req.method);
      res.writeHead(200, {
        'Content-Length' : Buffer.byteLength(str),//string타입만 가능
        'Content-Type': 'application/json'//json타입을 넘깁니다
      }).end(str);
    }
    else if(req.method === 'POST'){
      console.log(req.method);
      const body = []; // 데이터를 저장할 공간 만들기
      res.write('<h1>Welcome Post</h1>')
      //POST 방식으로 요청이 오면 --> JSON 데이터 받기

      //클라이언트의 JSON 데이터를 받아서 저장
      req.on('data',(chunk)=>{ //request도 클라이언트와 서버간의 길
        console.log(chunk.toString())
        body.push(chunk)
        console.log(body);
      })
      req.on('end',()=>{
        const bodyStr = Buffer.concat(body).toString()
        console.log(bodyStr);
        //body의 데이터를 string으로 변환
        //모양은 json이지만 타입은 string
        
        let bodyJson = JSON.parse(bodyStr)
        //string 문자열을 json객체로 파싱후
        
        courses.push(bodyJson)
        //courses에 추가
        
        //결과 완료 전송
        console.log(courses);
        res.writeHead(201).end()
        
      })
    }
  }else{
    console.log(url);
    res.write('<h1>File not found</h1>')
    res.end();
  }
})
server.listen(8080);
//서버 리스닝(8080)
