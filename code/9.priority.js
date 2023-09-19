console.log('code 1');

setTimeout(() => {
  console.log('setTimeout!!');
}, 0);
//0초여도 api 쪽에 던져둠
//code 1,2,3 찍힐 때 까지 task queue에 존재


console.log('code 2');

setImmediate(()=>{
console.log('setImmediate!');
},0)
//code 1,2,3 찍힐 때 까지 task queue에 존재

console.log('code 3');
//마지막 console.log인 code 3이 실행이 되어 콜스택이 비면 이벤트 loop 호출

process.nextTick(()=>{
  console.log('nextTick!');
});