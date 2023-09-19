
const fs = require('fs').promises;

//test.txt 읽어서 데이터 받아오기, 콘솔에 출력
fs.readFile('./test.txt','utf-8')
.then((data)=>{
console.log(data);
console.log('--readfile--');
})
.catch(console.error)
.finally(console.log('--readFileend--'))

//test.txt 파일 문자열 덮어쓰기
fs.writeFile('./test.txt','hello~ java script node js')
.then(console.log('--write--'))
.catch(console.error)
//쓰는것이 더 빠름

//test.txt 파일에 데이터 추가하기
fs.appendFile('./test.txt','\r\n XXXXX \r\n')
.then(console.log('--appendFile--'))
.catch(console.error)
//buffer? 임시저장소

//test.txt 파일 복사
fs.copyFile('./test.txt','./test-copy.txt')
.then(console.log('--copyFile--'))
.catch(console.error)

// sub-folder 생성
fs.mkdir('sub-folder')
.then(console.log)
.catch(console.error)