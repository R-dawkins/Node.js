//createreadstream을 이용하여 file.txt 파일의 내용을 16바이트 씩 읽어서
//file-stream.txt 파일 안에 createwritestream을 이용하여 저장

const fs = require('fs');

const rStream = fs.createReadStream('./file.txt',{highWaterMark:16})
const wStream = fs.createWriteStream('./file-stream.txt',{})

rStream.on('data',chunk=>{//데이터를 close()이벤트를 줄때까지, 혹은 
  //끝날때까지 반복해서 읽음 highWaterMark에 정해준 bit만큼 한번에 읽음
console.count('data')
wStream.write(chunk)
// wStream.end() 
//wStream.end를 사용하면 읽기는 여러번 읽지만 쓰는것은 첫번째만 쓰기 때문에
//첫 문장만 쓰고 덮어씌우고를 반복한다
//console.count('data')에서는 읽은 횟수를 모두 출력한다 여기서는 약 300회
rStream.close()
//rStream.close()를 사용하면 읽기를 한번 읽기 때문에 첫 문장(16비트)만 
//chunk에 포함되어있고 반복을 멈추기 때문에 한번만 쓴다
//console.count('data')에서는 읽은 횟수가 1번으로 뜬다
}).on('close',()=>{console.log('--finish--')})

