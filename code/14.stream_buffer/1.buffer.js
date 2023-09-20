const fs = require('fs');

//api에 Static이 붙어있으면 정적 객체이기때문에 바로 사용가능
const buf = Buffer.from('Hi~');
//Hi~가 16진수 buffer로 바뀜 (아스키코드)

const buf2 = Buffer.from([0,1,2,3,4])
console.log(buf);
console.log(buf.length);
console.log(buf2);
console.log(buf2.length);
console.log(buf2.toString());
console.log(buf[0]);
console.log(buf[1]);
console.log(buf[2]);
//buf의 인덱스로 출력하면 10진수로
console.log(buf.toString());

const buf3 = Buffer.alloc(buf.length);//빈 버퍼 생성 alloc(버퍼길이)
console.log(buf3.length);// buf의 길이는 3이기때문에 버퍼3개가 들어가는 빈버퍼가 만들어짐
buf.copy(buf3)//buf의 내용을 복사하여 buf3에 저장
console.log(buf3);

const bufarray = [buf,buf3];
const bufsum = Buffer.concat(bufarray);//buffer를 배열형태로 넣어줘서 합치는 메소드


console.log(bufsum);
console.log(bufsum.toString());
