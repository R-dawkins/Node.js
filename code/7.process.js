const process = require('process');

console.log(process.execPath);
console.log(process.version);
console.log(process.pid); //프로세스 아이디
console.log(process.ppid); //프로세스 부모의 아이디
console.log(process.platform);
console.log(process.env);
console.log(process.uptime());
console.log(process.cwd()); //현재 경로
console.log(process.cpuUsage());

//setTimeout(콜백함수, 1000); --> non-blocking
//1초후에 'setTimeout!!' 출력
global.setTimeout(() => {
  console.log('setTimeout!!');
}, 1000);

//nextTick(콜백함수); --> non-blocking 콜백함수가 포함된다는 것은 비동기일 확률이 높다는 것
//비동기식 함수중에 우선순위가 가장 높다
//비동기식 처리중에 가장 먼저 하고 싶은 작업을 nextTick 안에 넣어 사용한다
process.nextTick(()=>{
  console.log('nextTick!!');
})