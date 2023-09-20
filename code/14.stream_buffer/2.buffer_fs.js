const fs = require('fs');
const process = require('process');

//process.memoryUsage().rss 현재 메모리 사용량

//파일 읽기 전,후 메모리 사용량 체크
console.log(process.memoryUsage().rss);

fs.readFile('./file.txt',(err,data)=>{
  console.log(process.memoryUsage().rss);
  
  console.log(data);
  fs.writeFile('./file-copy.txt',data,()=>{//읽은 데이터를 file2.txt파일에 저장
    console.log(process.memoryUsage().rss);
  })
})
//자바스크립트엔진 밖 C드라이브...에 있는 file.txt를 자바엔진 내부에 임시 저장하여
//사용하기 위해 버퍼가 만들어짐

//stream으로 

fs.promises.readFile('./file.txt')
.then((data)=>{
  console.log(process.memoryUsage().rss)
  fs.promises.writeFile('./file2.txt',data)
  .then(console.log(process.memoryUsage().rss))
  .catch(console.error)
}).catch(console.error)