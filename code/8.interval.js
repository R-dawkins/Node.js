//1초에 정수를 하나씩 증가하여 출력하는 함수
let count = 1;

const countInt = setInterval(() => {

  console.log(count++);

}, 1000);

setTimeout(() => {
  console.log('-- Timeout --');
  clearInterval(countInt)
}, 6000);