const fs =require('fs');
//Stream을 이용하여 파일을 읽어오는 방법
//읽어 올 대상이 있어야 함
//emitclose? 
//readstream 읽어올때 스트림
//연결 - pipe
//writestream 저장(쓰기)할때 스트림

//엔진외부와 내부엔진을 연결하는것이 stream
// fs.promises.open('./file.txt').then(data=>{data.createReadStream()})
//stream은 단방향이다 - 양방향으로 동작할 수 없다
const stream = fs.createReadStream('./file.txt',{})
const buf = [];
stream.on('data',(chunk)=>{//'data'는 실행하는 이벤트 타입이다
  buf.push(chunk)
  console.count('data')
  // console.log(chunk.toString());
  stream.close(); //한번만 작동하고 stream을 끝낸다
  //추가로 다른 작업을 하지 않고 닫으려면 stream.close();를 내부에 둠으로써 끝낼 수 있다
}).on('close',()=>{//chain형식으로 다른 이벤트타입을 사용할 수 있다.
  console.log(buf.length); //버퍼 덩어리 하나가 배열로 들어감
  console.log('--finished--')
  console.log(buf)
  console.log(buf.join(''));
})//stream 작업을 모두 끝내고 닫는다.

